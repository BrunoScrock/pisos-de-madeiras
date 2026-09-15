/* ==========================================================================
   FF PISOS DE MADEIRAS — Funcionalidades Principais
   ========================================================================== */

/* --------------------------------------------------------------------------
   WHATSAPP CENTRALIZADO
   -------------------------------------------------------------------------- */

function gerarUrlWhatsApp(mensagem) {
  const texto = encodeURIComponent(mensagem);
  return `https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${texto}`;
}

function enviarOrcamento(categoria) {
  let mensagem = CONFIG.mensagemPadrao;

  if (categoria) {
    const chave = "mensagem" + categoria.charAt(0).toUpperCase() + categoria.slice(1);
    if (CONFIG[chave]) {
      mensagem = CONFIG[chave];
    }
  }

  window.open(gerarUrlWhatsApp(mensagem), "_blank", "noopener");
}

/* --------------------------------------------------------------------------
   FORMULARIO DE PRE-ORCAMENTO
   -------------------------------------------------------------------------- */

function enviarFormulario(event) {
  event.preventDefault();

  const form = event.target;
  const nome = form.querySelector('[name="nome"]').value.trim();
  const telefone = form.querySelector('[name="telefone"]').value.trim();
  const servico = form.querySelector('[name="servico"]').value;
  const descricao = form.querySelector('[name="descricao"]').value.trim();
  const cidade = form.querySelector('[name="cidade"]').value.trim();

  if (!nome || !telefone || !servico || !descricao) {
    alert("Por favor, preencha todos os campos obrigatorios.");
    return;
  }

  let mensagem = `Ola! Gostaria de solicitar um orcamento.\n\n`;
  mensagem += `*Nome:* ${nome}\n`;
  mensagem += `*Telefone:* ${telefone}\n`;
  mensagem += `*Tipo de servico:* ${servico}\n`;
  mensagem += `*Descricao:* ${descricao}\n`;
  if (cidade) mensagem += `*Cidade:* ${cidade}\n`;
  mensagem += `\nAguardo retorno. Obrigado!`;

  const url = gerarUrlWhatsApp(mensagem);
  window.open(url, "_blank", "noopener");
}

/* --------------------------------------------------------------------------
   COVERFLOW — GALERIA 3D DE PROJETOS
   -------------------------------------------------------------------------- */

function montarCoverflow() {
  const stage = document.getElementById("coverflow-stage");
  if (!stage) return;

  const ambBg = document.getElementById("coverflow-bg");
  const dotsContainer = document.getElementById("coverflow-dots");
  const btnPrev = document.getElementById("coverflow-prev");
  const btnNext = document.getElementById("coverflow-next");

  const itens = PORTFOLIO || [];
  if (!itens.length) return;

  let indice = 0;
  let touchX = 0;
  let hoverLock = false;

  // Criar cartoes
  itens.forEach(function (item, i) {
    const card = document.createElement("div");
    card.className = "coverflow-card";
    card.dataset.index = i;
    card.setAttribute("role", "tabpanel");

    const img = document.createElement("img");
    img.src = item.imagem;
    img.alt = item.titulo;
    img.loading = "lazy";
    img.draggable = false;
    card.appendChild(img);

    const vignette = document.createElement("div");
    vignette.className = "coverflow-vignette";
    card.appendChild(vignette);

    const content = document.createElement("div");
    content.className = "coverflow-content";
    content.innerHTML =
      '<span class="coverflow-tag">' + item.tag + '</span>' +
      '<div class="coverflow-body">' +
        '<h3 class="coverflow-title">' + item.titulo + '</h3>' +
        (item.descricao ? '<p class="coverflow-desc">' + item.descricao + '</p>' : '') +
        (item.imagens && item.imagens.length > 1 ? '<span class="coverflow-hint">Ver todas as fotos</span>' : '') +
        '<button class="coverflow-cta" data-categoria="' + (item.categoria || '') + '">Solicitar Orcamento</button>' +
      '</div>';
    card.appendChild(content);

    card.addEventListener("click", function () {
      abrirLightbox(i);
    });

    card.addEventListener("mouseenter", function () {
      if (hoverLock) return;
      if (indiceAtual(i) !== 0) {
        hoverLock = true;
        setTimeout(function () { hoverLock = false; }, 850);
        irPara(i);
      }
    });

    content.querySelector(".coverflow-cta").addEventListener("click", function (e) {
      e.stopPropagation();
      enviarOrcamento(e.currentTarget.dataset.categoria);
    });

    stage.appendChild(card);
  });

  const cards = Array.from(stage.children);

  // Dots
  itens.forEach(function (_, i) {
    const dot = document.createElement("button");
    dot.className = "coverflow-dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Ir para projeto " + (i + 1));
    dot.addEventListener("click", function () { irPara(i); });
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function indiceAtual(i) {
    let d = (i - indice + itens.length) % itens.length;
    if (d > itens.length / 2) d -= itens.length;
    return d;
  }

  function atualizar() {
    const cardW = cards[0].offsetWidth || 320;
    const deslocamento = function (fator, sinal) { return Math.round(fator * cardW) * sinal; };

    cards.forEach(function (card, i) {
      const d = indiceAtual(i);
      const sinal = d < 0 ? -1 : 1;
      const abs = Math.abs(d);
      var transformo = "";
      var opacidade = 0;
      var z = 1;
      var filtro = "brightness(0.4) blur(2px)";
      var centro = false;

      if (d === 0) {
        transformo = "none";
        opacidade = 1;
        z = 30;
        filtro = "none";
        centro = true;
      } else if (abs === 1) {
        transformo = "translateX(" + deslocamento(0.62, sinal) + "px) scale(0.84) rotateY(" + (-24 * sinal) + "deg)";
        opacidade = 0.6;
        z = 20;
        filtro = "brightness(0.75)";
      } else if (abs === 2) {
        transformo = "translateX(" + deslocamento(1.05, sinal) + "px) scale(0.68) rotateY(" + (-38 * sinal) + "deg)";
        opacidade = 0.35;
        z = 10;
        filtro = "brightness(0.55) blur(1px)";
      } else {
        transformo = "translateX(" + deslocamento(1.35, sinal) + "px) scale(0.55) rotateY(" + (-45 * sinal) + "deg)";
        opacidade = 0;
      }

      card.style.transform = transformo;
      card.style.opacity = opacidade;
      card.style.zIndex = z;
      card.style.filter = filtro;
      card.setAttribute("aria-hidden", centro ? "false" : "true");
      card.classList.toggle("is-center", centro);
    });

    if (ambBg) ambBg.src = itens[indice].imagem;

    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === indice);
      dot.setAttribute("aria-selected", i === indice ? "true" : "false");
    });
  }

  function proximo() {
    indice = (indice + 1) % itens.length;
    atualizar();
  }

  function anterior() {
    indice = (indice - 1 + itens.length) % itens.length;
    atualizar();
  }

  function irPara(i) {
    indice = (i + itens.length) % itens.length;
    atualizar();
  }

  btnPrev.addEventListener("click", anterior);
  btnNext.addEventListener("click", proximo);

  // Teclado
  stage.addEventListener("keydown", function (e) {
    if (overlay.classList.contains("open")) return;
    if (e.key === "ArrowLeft") { anterior(); e.preventDefault(); }
    if (e.key === "ArrowRight") { proximo(); e.preventDefault(); }
  });

  // Toque
  stage.addEventListener("touchstart", function (e) {
    touchX = e.touches[0].clientX;
  }, { passive: true });

  stage.addEventListener("touchend", function (e) {
    const diff = e.changedTouches[0].clientX - touchX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) proximo();
      else anterior();
    }
  }, { passive: true });

  // -----------------------------------------------------------------------
  // LIGHTBOX
  // -----------------------------------------------------------------------

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Galeria de fotos do projeto");
  overlay.innerHTML =
    '<button class="lightbox-close" aria-label="Fechar galeria"><i data-lucide="x"></i></button>' +
    '<div class="lightbox-counter"></div>' +
    '<button class="lightbox-arrow prev" aria-label="Foto anterior"><i data-lucide="chevron-left"></i></button>' +
    '<button class="lightbox-arrow next" aria-label="Proxima foto"><i data-lucide="chevron-right"></i></button>' +
    '<figure class="lightbox-figure">' +
      '<img class="lightbox-img" src="" alt="">' +
      '<figcaption>' +
        '<span class="coverflow-tag lightbox-tag"></span>' +
        '<h3 class="lightbox-title"></h3>' +
        '<button class="coverflow-cta lightbox-cta">Solicitar Orcamento</button>' +
      '</figcaption>' +
    '</figure>' +
    '<div class="lightbox-thumbs"></div>';
  document.body.appendChild(overlay);

  var obraAtiva = 0;
  var fotoAtiva = 0;

  function fotosDaObra(i) {
    var fotos = itens[i].imagens;
    return Array.isArray(fotos) && fotos.length ? fotos : [itens[i].imagem];
  }

  function atualizarLightbox() {
    var fotos = fotosDaObra(obraAtiva);
    var item = itens[obraAtiva];
    var imgEl = overlay.querySelector(".lightbox-img");
    var counter = overlay.querySelector(".lightbox-counter");
    var hasMulti = fotos.length > 1;

    if (fotos.length) {
      imgEl.src = fotos[fotoAtiva];
      imgEl.alt = item.titulo + " - foto " + (fotoAtiva + 1) + " de " + fotos.length;
    }

    counter.textContent = hasMulti ? (fotoAtiva + 1) + " / " + fotos.length : "";
    overlay.classList.toggle("has-single", !hasMulti);
    overlay.querySelector(".lightbox-tag").textContent = item.tag;
    overlay.querySelector(".lightbox-title").textContent = item.titulo;
    overlay.querySelector(".lightbox-cta").onclick = function () { enviarOrcamento(item.categoria); };

    var thumbs = overlay.querySelector(".lightbox-thumbs");
    thumbs.innerHTML = "";
    if (hasMulti) {
      fotos.forEach(function (src, fi) {
        var t = document.createElement("button");
        t.type = "button";
        t.className = "lightbox-thumb" + (fi === fotoAtiva ? " active" : "");
        t.setAttribute("aria-label", "Ir para a foto " + (fi + 1));
        var ti = document.createElement("img");
        ti.src = src;
        ti.alt = "";
        ti.loading = "lazy";
        t.appendChild(ti);
        t.addEventListener("click", function () {
          fotoAtiva = fi;
          atualizarLightbox();
        });
        thumbs.appendChild(t);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function fotoAnterior() {
    var fotos = fotosDaObra(obraAtiva);
    if (fotos.length <= 1) return;
    fotoAtiva = (fotoAtiva - 1 + fotos.length) % fotos.length;
    atualizarLightbox();
  }

  function fotoProxima() {
    var fotos = fotosDaObra(obraAtiva);
    if (fotos.length <= 1) return;
    fotoAtiva = (fotoAtiva + 1) % fotos.length;
    atualizarLightbox();
  }

  function abrirLightbox(i) {
    obraAtiva = i;
    fotoAtiva = 0;
    pararAutoplay();
    atualizarLightbox();
    overlay.classList.add("open");
    document.body.classList.add("no-scroll");
    if (window.lucide) window.lucide.createIcons();
  }

  function fecharLightbox() {
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
    iniciarAutoplay();
  }

  overlay.querySelector(".lightbox-close").addEventListener("click", fecharLightbox);
  overlay.querySelector(".lightbox-arrow.prev").addEventListener("click", function (e) {
    e.stopPropagation();
    fotoAnterior();
  });
  overlay.querySelector(".lightbox-arrow.next").addEventListener("click", function (e) {
    e.stopPropagation();
    fotoProxima();
  });
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) fecharLightbox();
  });

  var lightboxTouchX = 0;
  overlay.addEventListener("touchstart", function (e) {
    lightboxTouchX = e.touches[0].clientX;
  }, { passive: true });
  overlay.addEventListener("touchend", function (e) {
    var diff = e.changedTouches[0].clientX - lightboxTouchX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) fotoProxima();
      else fotoAnterior();
    }
  }, { passive: true });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("open")) return;
    if (e.key === "Escape") { fecharLightbox(); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { fotoAnterior(); e.preventDefault(); }
    else if (e.key === "ArrowRight") { fotoProxima(); e.preventDefault(); }
  });

  // Autoplay
  var reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var timer = null;

  function pararAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function iniciarAutoplay() {
    pararAutoplay();
    if (reduzirMovimento || itens.length <= 1) return;
    if (overlay.classList.contains("open")) return;
    timer = setInterval(proximo, 5000);
  }

  var cover = document.getElementById("coverflow");
  if (cover) {
    cover.addEventListener("mouseenter", pararAutoplay);
    cover.addEventListener("mouseleave", iniciarAutoplay);
    cover.addEventListener("focusin", pararAutoplay);
    cover.addEventListener("focusout", iniciarAutoplay);
  }

  atualizar();
  iniciarAutoplay();
  if (window.lucide) window.lucide.createIcons();
}

/* --------------------------------------------------------------------------
   PREENCHIMENTO AUTOMATICO COM BASE NA CONFIGURACAO
   -------------------------------------------------------------------------- */

function aplicarConfiguracao() {
  // Nome
  var logoNome = document.getElementById("logo-nome");
  var footerNome = document.getElementById("footer-nome");
  var copyrightNome = document.getElementById("copyright-nome");
  if (logoNome) logoNome.textContent = CONFIG.logoNome;
  if (footerNome) footerNome.textContent = CONFIG.empresa;
  if (copyrightNome) copyrightNome.textContent = CONFIG.empresa;

  // Titulo da pagina
  document.title = CONFIG.empresa + " | " + CONFIG.tagline;

  // Horario
  var badgeHorario = document.getElementById("badge-horario");
  if (badgeHorario) badgeHorario.textContent = CONFIG.horario || "Atendimento profissional";

  var badgeHorario2 = document.getElementById("badge-horario-2");
  if (badgeHorario2) badgeHorario2.textContent = CONFIG.horario || "[INSERIR HORARIO]";

  // Area de atendimento
  var coverageText = document.getElementById("coverage-text");
  if (coverageText) coverageText.textContent = CONFIG.atendimento ? "Atendimento em " + CONFIG.atendimento : "[INSERIR AREA DE ATENDIMENTO]";

  // Telefone (links com classe .js-phone)
  document.querySelectorAll(".js-phone").forEach(function (el) {
    if (CONFIG.telefone) {
      el.textContent = CONFIG.telefone;
      el.setAttribute("href", "tel:" + CONFIG.telefone.replace(/\D/g, ""));
    }
  });

  // E-mail (links com classe .js-email)
  document.querySelectorAll(".js-email").forEach(function (el) {
    if (CONFIG.email) {
      el.textContent = CONFIG.email;
      el.setAttribute("href", "mailto:" + CONFIG.email);
    }
  });

  // WhatsApp footer
  var footerWhatsapp = document.getElementById("footer-whatsapp-link");
  if (footerWhatsapp) {
    footerWhatsapp.setAttribute("href", gerarUrlWhatsApp(CONFIG.mensagemPadrao));
  }

  // Endereco
  var enderecoEl = document.getElementById("footer-endereco");
  if (enderecoEl && CONFIG.endereco) {
    enderecoEl.textContent = CONFIG.endereco;
  }

  // Redes sociais
  var instagram = document.getElementById("footer-instagram");
  if (instagram && CONFIG.instagram) {
    instagram.setAttribute("href", CONFIG.instagram);
  }

  var facebook = document.getElementById("footer-facebook");
  if (facebook && CONFIG.facebook) {
    facebook.setAttribute("href", CONFIG.facebook);
  }

  // Ano atual
  var anoAtual = document.getElementById("ano-atual");
  if (anoAtual) anoAtual.textContent = new Date().getFullYear();
}

/* --------------------------------------------------------------------------
   MENU MOBILE
   -------------------------------------------------------------------------- */

function inicializarMenuMobile() {
  var botao = document.getElementById("mobileMenuBtn");
  var menu = document.querySelector(".nav-menu");

  if (!botao || !menu) return;

  function fecharMenu() {
    menu.classList.remove("active");
    botao.classList.remove("open");
    botao.setAttribute("aria-expanded", "false");
    botao.setAttribute("aria-label", "Abrir menu");
  }

  botao.addEventListener("click", function () {
    var aberto = menu.classList.toggle("active");
    botao.classList.toggle("open", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      fecharMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   ANIMACOES DE ENTRADA (REVEAL AO ROLAR)
   -------------------------------------------------------------------------- */

function iniciarReveal() {
  var seletoresReveal = [
    ".diff-grid > *",
    ".services-grid > *",
    ".about-grid > *",
    ".coverage-grid > *",
    ".form-grid > *",
    ".form-info-features > *",
    ".section-title",
    ".coverflow",
    ".final-cta > .container > *"
  ];

  var seletoresLeft = [
    ".about-image"
  ];

  var seletoresRight = [
    ".about-content"
  ];

  var alvos = document.querySelectorAll(seletoresReveal.join(","));
  var alvosLeft = document.querySelectorAll(seletoresLeft.join(","));
  var alvosRight = document.querySelectorAll(seletoresRight.join(","));

  if (!("IntersectionObserver" in window)) return;

  function observar(seletores, classe) {
    var items = document.querySelectorAll(seletores);
    if (!items.length) return;

    items.forEach(function (el, i) {
      el.classList.add(classe);
      var idx = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.transitionDelay = (idx % 6 * 0.1) + "s";
    });

    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          obs.unobserve(entrada.target);
          var atraso = parseFloat(entrada.target.style.transitionDelay || 0);
          setTimeout(function () {
            entrada.target.style.transitionDelay = "0s";
          }, atraso * 1000 + 800);
        }
      });
    }, { threshold: 0.1 });

    items.forEach(function (el) { obs.observe(el); });
  }

  observar(seletoresReveal.join(","), "reveal");
  observar(seletoresLeft.join(","), "reveal-left");
  observar(seletoresRight.join(","), "reveal-right");
}

/* --------------------------------------------------------------------------
   ANIMACAO SEQUENCIAL DO PROCESSO (checks um a um)
   -------------------------------------------------------------------------- */

function iniciarAnimarProcesso() {
  var grade = document.querySelector(".process-grid");
  if (!grade) return;

  var passos = grade.querySelectorAll(".process-step");
  if (!passos.length) return;

  var reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  grade.classList.add("process-animated");

  function marcarTudo() {
    passos.forEach(function (p) { p.classList.add("checked"); });
  }

  function marcarSequencial() {
    passos.forEach(function (passo, i) {
      setTimeout(function () {
        passo.classList.add("checked");
      }, 350 + i * 450);
    });
  }

  if (!("IntersectionObserver" in window) || reduzirMovimento) {
    marcarTudo();
    return;
  }

  var obs = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;
      obs.unobserve(entrada.target);
      marcarSequencial();
    });
  }, { threshold: 0.25 });

  obs.observe(grade);
}

/* --------------------------------------------------------------------------
   PARTÍCULAS DO HERO
   -------------------------------------------------------------------------- */

function criarParticulasHero() {
  var container = document.querySelector(".hero-particles");
  if (!container) return;

  var reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduzirMovimento) return;

  var isMobile = window.innerWidth < 900;
  var total = isMobile ? 12 : 24;

  for (var i = 0; i < total; i++) {
    var p = document.createElement("div");
    p.className = "hero-particle";
    var size = Math.random() * 4 + 2;
    var left = Math.random() * 100;
    var dur = Math.random() * 12 + 10;
    var delay = Math.random() * 15;

    p.style.cssText =
      "width:" + size + "px;height:" + size + "px;left:" + left + "%;" +
      "background:rgba(196,154,108," + (0.3 + Math.random() * 0.4) + ");" +
      "animation-duration:" + dur + "s;animation-delay:" + delay + "s;";
    container.appendChild(p);
  }
}

/* --------------------------------------------------------------------------
   NAVEGACAO ATIVA (SCROLL SPY)
   -------------------------------------------------------------------------- */

function iniciarScrollSpy() {
  var links = document.querySelectorAll(".nav-menu a");
  if (!links.length) return;

  var sections = [];
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      var section = document.querySelector(href);
      if (section) sections.push({ el: section, link: link });
    }
  });

  if (!sections.length) return;

  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        links.forEach(function (l) { l.classList.remove("active"); });
        var item = sections.find(function (s) { return s.el === entrada.target; });
        if (item) item.link.classList.add("active");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  sections.forEach(function (s) { observer.observe(s.el); });
}

/* --------------------------------------------------------------------------
   INICIALIZACAO
   -------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  aplicarConfiguracao();
  montarCoverflow();
  criarParticulasHero();
  iniciarReveal();
  iniciarAnimarProcesso();
  inicializarMenuMobile();
  iniciarScrollSpy();

  // Scroll do header — transparente no hero, vidro fosco ao rolar
  var header = document.getElementById("topo");
  var hero = document.getElementById("hero");

  function aoRolar() {
    var scrollY = window.scrollY;
    var limiteGlass = hero
      ? hero.offsetTop + hero.offsetHeight * 0.7
      : window.innerHeight * 0.85;

    header.classList.toggle("scrolled", scrollY > 40);
    header.classList.toggle("glass", scrollY > limiteGlass);
  }

  if (header) {
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
  }

  // Clique nas logos -> topo
  document.querySelectorAll(".logo, .footer-logo").forEach(function (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Lucide icons
  if (window.lucide) window.lucide.createIcons();
});
