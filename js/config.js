/* ==========================================================================
   CONFIGURACAO CENTRALIZADA — FF PISOS DE MADEIRAS
   --------------------------------------------------------------------------
   Altere aqui as informacoes da empresa em um unico lugar.
   ========================================================================== */

const CONFIG = {

  /* Nome e identidade ---------------------------------------------------- */
  empresa: "FF Pisos de Madeiras",
  logoNome: "FF Pisos de Madeiras",
  tagline: "Pisos e Acabamentos em Madeira",
  slogan: "Elegancia e qualidade em pisos de madeira para transformar seus ambientes",

  /* Contato -------------------------------------------------------------- */
  whatsapp: "5500000000000",       // Formato: 55 + DDD + numero (somente digitos)
  telefone: "",                    // Ex.: (00) 00000-0000
  email: "",                       // Ex.: contato@ffpisosdemadeiras.com.br

  /* Localizacao ---------------------------------------------------------- */
  cidade: "",                      // Ex.: Curitiba
  endereco: "",                    // Ex.: Rua Exemplo, 123 - Bairro
  atendimento: "",                 // Ex.: Curitiba e Regiao Metropolitana

  /* Funcionamento -------------------------------------------------------- */
  horario: "",                     // Ex.: Seg a Sex: 08h as 18h

  /* Redes Sociais -------------------------------------------------------- */
  instagram: "",
  facebook: "",

  /* Mensagens do WhatsApp ------------------------------------------------ */
  mensagemPadrao: "Ola! Gostaria de solicitar um orcamento para pisos de madeira com a FF Pisos de Madeiras.",
  mensagemPisos: "Ola! Gostaria de solicitar um orcamento para instalacao de pisos de madeira com a FF Pisos de Madeiras.",
  mensagemRestauracao: "Ola! Gostaria de solicitar um orcamento para restauracao de pisos de madeira com a FF Pisos de Madeiras.",
  mensagemAcabamento: "Ola! Gostaria de solicitar um orcamento para acabamento de pisos de madeira com a FF Pisos de Madeiras.",
  mensagemManutencao: "Ola! Gostaria de solicitar um orcamento para manutencao de pisos de madeira com a FF Pisos de Madeiras.",
  mensagemDrenagem: "Ola! Gostaria de solicitar um orcamento para drenagem e pavimentacao com a FF Pisos de Madeiras."
};

/* ==========================================================================
   PORTFOLIO — PROJETOS REALIZADOS
   --------------------------------------------------------------------------
   Para adicionar/alterar um projeto, edite um item abaixo.
   - tag: categoria exibida no cartao
   - titulo: nome do projeto
   - descricao: resumo curto
   - imagem: foto principal (capa)
   - imagens: lista de fotos da galeria lightbox
   - categoria: palavra-chave usada na mensagem do WhatsApp
   ========================================================================== */

const PORTFOLIO = [
  // IMAGENS DE TESTE (Unsplash). Substitua por fotos reais.
  {
    tag: "Residencial",
    titulo: "Piso de Peroba Real",
    descricao: "Instalacao de piso de peroba real com acabamento premium em residencia de alto padrao.",
    imagem: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Pisos"
  },
  {
    tag: "Restauracao",
    titulo: "Restauracao de Piso Antigo",
    descricao: "Raspagem, lixamento e nova aplicacao de acabamento em piso de madeira centenario.",
    imagem: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Restauracao"
  },
  {
    tag: "Comercial",
    titulo: "Piso em Espaco Comercial",
    descricao: "Piso de madeira nobre em loja de luxo com acabamento acetinado e alta durabilidade.",
    imagem: "https://images.unsplash.com/photo-1600607687644-c7f34b5e6db0?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1600607687644-c7f34b5e6db0?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Pisos"
  },
  {
    tag: "Acabamento",
    titulo: "Acabamento Premium",
    descricao: "Aplicacao de verniz marine e polimento de alto brilho em piso de jatoba.",
    imagem: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=70",
    imagens: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=70",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=70"
    ],
    categoria: "Acabamento"
  }
];
