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
  {
    tag: "Residencial",
    titulo: "Piso de Peroba Real",
    descricao: "Instalacao de piso de peroba real com acabamento premium em residencia de alto padrao.",
    imagem: "assets/images/portfolio/projeto-01/foto-01.jpg",
    imagens: [
      "assets/images/portfolio/projeto-01/foto-01.jpg",
      "assets/images/portfolio/projeto-01/foto-02.jpg",
      "assets/images/portfolio/projeto-01/foto-03.jpg"
    ],
    categoria: "Pisos"
  },
  {
    tag: "Restauracao",
    titulo: "Restauracao de Piso Antigo",
    descricao: "Raspagem, lixamento e nova aplicacao de acabamento em piso de madeira centenario.",
    imagem: "assets/images/portfolio/projeto-02/foto-01.jpg",
    imagens: [
      "assets/images/portfolio/projeto-02/foto-01.jpg",
      "assets/images/portfolio/projeto-02/foto-02.jpg",
      "assets/images/portfolio/projeto-02/foto-03.jpg"
    ],
    categoria: "Restauracao"
  },
  {
    tag: "Comercial",
    titulo: "Piso em Espaco Comercial",
    descricao: "Piso de madeira nobre em loja de luxo com acabamento acetinado e alta durabilidade.",
    imagem: "assets/images/portfolio/projeto-03/foto-01.jpg",
    imagens: [
      "assets/images/portfolio/projeto-03/foto-01.jpg",
      "assets/images/portfolio/projeto-03/foto-02.jpg",
      "assets/images/portfolio/projeto-03/foto-03.jpg"
    ],
    categoria: "Pisos"
  },
  {
    tag: "Acabamento",
    titulo: "Acabamento Premium",
    descricao: "Aplicacao de verniz marine, polimento e tratamento de alto brilho em piso de jatoba.",
    imagem: "assets/images/portfolio/projeto-04/foto-01.jpg",
    imagens: [
      "assets/images/portfolio/projeto-04/foto-01.jpg",
      "assets/images/portfolio/projeto-04/foto-02.jpg"
    ],
    categoria: "Acabamento"
  }
];
