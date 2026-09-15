# FF Pisos de Madeiras

Site institucional profissional para a **FF Pisos de Madeiras**, empresa especializada em pisos de madeira, restauracao e acabamento.

O site apresenta a empresa, seus servicos, projetos realizados, processo de trabalho, area de atendimento, formulario de orcamento e integracao com WhatsApp.

---

## Objetivo

Divulgar a FF Pisos de Madeiras de forma profissional e sofisticada, transmitindo qualidade, confianca e cuidado com o acabamento da madeira, facilitando o contato e a solicitacao de orcamentos.

## Tecnologias

- HTML5
- CSS3 (variaveis, grid, flexbox, animacoes)
- JavaScript ES6+ (vanilla, sem dependencias pesadas)
- SVG (logotipo, favicon, icones)
- Lucide Icons (via CDN)
- Google Fonts (Inter + Playfair Display)

Nao utiliza backend, banco de dados, login ou painel administrativo.

## Estrutura de Pastas

```
ff-pisos-madeiras/
│
├── index.html            → Estrutura da pagina (todas as secoes)
│
├── css/
│   └── style.css         → Estilos, identidade visual, animacoes, responsividade
│
├── js/
│   ├── config.js         → INFORMACOES DA EMPRESA + PORTFOLIO (edite aqui!)
│   └── script.js         → Funcionalidades (menu, galeria, lightbox, whatsapp)
│
├── assets/
│   └── images/
│       ├── logo/         → Logotipo e favicon
│       ├── hero/         → Imagem de fundo do Hero
│       ├── sobre/        → Foto da secao Sobre
│       ├── servicos/     → Imagens de apoio dos servicos
│       └── portfolio/    → Fotos dos projetos
│           ├── projeto-01/
│           ├── projeto-02/
│           └── projeto-03/
│
├── favicon.ico           → Icone do site (opcional)
├── robots.txt            → Instrucoes para buscadores
├── sitemap.xml           → Mapa do site (para SEO)
├── llms.txt              → Descricao resumida da empresa
├── README.md             → Este arquivo
└── .gitignore
```

## Como editar as informacoes da empresa

Todas as informacoes editaveis ficam em **um unico lugar**: `js/config.js`.

```javascript
const CONFIG = {
  empresa: "FF Pisos de Madeiras",
  whatsapp: "5500000000000",   // 55 + DDD + numero, apenas digitos
  telefone: "",
  email: "",
  cidade: "",
  endereco: "",
  atendimento: "",             // Area de atendimento
  horario: "",
  instagram: "",
  facebook: ""
};
```

### Alterar WhatsApp

1. Abra `js/config.js`.
2. Localize `whatsapp: "5500000000000"`.
3. Substitua pelo numero no formato internacional: `55` + DDD + numero, somente digitos.

Exemplo: numero `(41) 99999-9999` vira `5541999999999`.

### Alterar telefone, e-mail, endereco

Preencha os campos correspondentes em `js/config.js`. O site atualiza automaticamente todas as referencias.

## Onde colocar as imagens

| Seccao               | Caminho sugerido                          |
|----------------------|-------------------------------------------|
| Logo (site)          | `assets/images/logo/`                     |
| Favicon              | `assets/images/logo/favicon.svg`          |
| Hero (fundo)         | `assets/images/hero/`                     |
| Sobre (foto)         | `assets/images/sobre/`                    |
| Servicos (banners)   | `assets/images/servicos/`                 |
| Portfolio (projetos) | `assets/images/portfolio/projeto-01/`     |

Recomendacao: use **WebP** ou JPEG comprimido para performance. Defina `width` e `height` nas `<img>` para evitar saltos de layout.

## Como adicionar um projeto no portfolio

Abra `js/config.js` e edite a constante `PORTFOLIO`:

```javascript
const PORTFOLIO = [
  {
    tag: "Residencial",
    titulo: "Nome do Projeto",
    descricao: "Descricao curta do trabalho realizado.",
    imagem: "assets/images/portfolio/projeto-01/imagem-01.jpg",
    imagens: [
      "assets/images/portfolio/projeto-01/imagem-01.jpg",
      "assets/images/portfolio/projeto-01/imagem-02.jpg",
      "assets/images/portfolio/projeto-01/imagem-03.jpg"
    ],
    categoria: "Pisos"
  }
];
```

- `tag`: categoria exibida no cartao.
- `titulo`: nome do projeto.
- `descricao`: resumo exibido no cartao.
- `imagem`: foto principal (capa).
- `imagens`: todas as fotos da galeria (a primeira normalmente e a capa).
- `categoria`: palavra-chave usada na mensagem do WhatsApp (deve existir mensagem correspondente em `CONFIG`).

Ao adicionar um projeto, coloque as fotos em uma nova pasta em `assets/images/portfolio/`.

## Como executar localmente

Opcao 1 — abrir o arquivo diretamente:

```
Basta abrir o index.html no navegador.
```

Opcao 2 — servidor local (recomendado para testar tudo):

```bash
# Com Python
python -m http.server 8000

# Com Node.js
npx serve
```

Depois acesse `http://localhost:8000`.

## Como publicar no GitHub Pages

1. Crie um repositorio no GitHub (ex.: `FFpisosdemadeira`).
2. Envie os arquivos:
   ```bash
   git add .
   git commit -m "Site institucional FF Pisos de Madeiras"
   git push origin main
   ```
3. No GitHub, va em **Settings > Pages**.
4. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
5. Clique em **Save**.
6. Aguarde alguns minutos e acesse `https://SEUUSUARIO.github.io/FFpisosdemadeira/`.

> O site usa caminhos relativos, portanto funciona corretamente em subdiretorios do GitHub Pages.

## SEO

- `title`, `description`, `keywords` no `index.html`.
- Open Graph e Twitter Cards no `index.html`.
- Schema.org `LocalBusiness` no `index.html`.
- `robots.txt` e `sitemap.xml` na raiz.
- Substitua `https://[DOMINIO]` pelo dominio definitivo quando existir.

## Representantes extras

- `llms.txt` — descricao resumida para ferramentas de IA e LLMs.

## Seguranca

- Nenhuma credencial, senha ou API key e usada no projeto.
- `js/config.js` contem apenas informacoes publicas (contato, redes sociais).
- Seguro para publicacao em repositorio publico.

## Proximos passos sugeridos

- [ ] Substituir as imagens placeholder (Unsplash) por fotos reais.
- [ ] Preencher `js/config.js` com dados oficiais.
- [ ] Adicionar depoimentos reais de clientes.
- [ ] Configurar o dominio definitivo no `robots.txt`, `sitemap.xml` e metas.
- [ ] Configurar Google Analytics e Google Search Console.
- [ ] Criar Google Business Profile com os dados do site.