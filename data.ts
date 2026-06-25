import { ProtocoloItem, LinkSocial, ProcessoCriativoItem, PreparoItem, PortfolioItem, FAQItem } from './types';

// ==========================================
// CONFIGURAÇÕES GERAIS E TEXTOS
// ==========================================

export const TEXTOS_GERAIS = {
  marca: "W. Siqueira",
  slogan: "A PELE FALA. EU ESCUTO.", 
  heroTituloPrincipal: "WILLIAM",
  heroTituloSecundario: "Etching Silence",
  heroTextoDescritivo: "Traduzindo ideias para o papel, do papel para a pele",
  anoEstabelecimento: "EST. 2018",
  tituloMetodologia: {
    linha1: "INTENSIDADE",
    linha2: "Silenciosa"
  },
  citacaoImagem: "\"O corpo não é uma tela, mas uma paisagem.\"",
  tituloFlash: "Flash\nDay",
  dataProximoEvento: "16 de Novembro, 2024",
  tituloPosCuidado: "A longevidade da sua arte depende da sua dedicação.",
  rodapeChamada: "Vamos conversar sobre a próxima marca que você quer carregar para sempre.", 
  rodapeTexto: "O suporte pós-tatuagem é vitalício. Se notar qualquer anormalidade, entre em contato imediatamente.",
  rodapeBotao: "Falar com o Especialista",
  endereco: [
    "Studio W. Siqueira",
    "Vila Madalena - São Paulo, SP",
    "Apenas com agendamento"
  ],
  manifesto: {
    titulo: "O MANIFESTO",
    fraseParte1: "Não apenas adornamos o corpo; nós o",
    fraseDestaque: "consagramos",
    fraseParte2: "com memória e intenção.",
    card1Titulo: "PREPARAÇÃO",
    card1Texto: "A tela deve estar pura. Hidrate-se profundamente por 48 horas. Evite álcool e anticoagulantes. O sono é a base da resistência.",
    card2Titulo: "PÓS-CUIDADO",
    card2Texto: "Trate o artefato como uma ferida. Mantenha limpo, hidrate com moderação. Deixe a pele respirar e se reformar em torno de sua nova história."
  },
  sobre: {
    titulo: "Do conceito à pele",
    paragrafo1: "Cada projeto nasce de uma história, a sua.\nMais do que um desenho, sua tatuagem carrega significado, memória e identidade.",
    paragrafo2: "Especialização em Neo Tradicional e Pontilhismo, com projetos autorais desenvolvidos a partir da sua narrativa, respeitando a anatomia do corpo e a essência de cada cliente.\nAqui, suas ideias ganham forma e passam a fazer parte de você.",
    imagens: [
      {
        url: "https://images.unsplash.com/photo-1550625624-2c49c71607a9?q=80&w=800&auto=format&fit=crop",
        alt: "Artista tatuando em estúdio com iluminação focada"
      },
      {
        url: "https://images.unsplash.com/photo-1572978398450-4886e0624d55?q=80&w=800&auto=format&fit=crop",
        alt: "Detalhe de tatuagem geométrica em processo"
      },
      {
        url: "https://images.unsplash.com/photo-1440635592348-167b1b30296f?q=80&w=800&auto=format&fit=crop",
        alt: "Ambiente do estúdio com arte na parede e atmosfera calma"
      }
    ]
  },
  concept: {
    titulo: "CONCEPT",
    subtitulo: "O Manifesto do Processo",
    textoPrincipal: "Não imponho formas. Descubro formas. Cada corpo tem sua geografia, curvas, texturas, cicatrizes, histórias. Minha tatuagem é um mapa que respeita o território.",
    textoSecundario: "A pele me conta uma história. Eu apenas a traduzo em linhas. Escuto o silêncio entre as palavras do cliente para encontrar a imagem que já existe, latente, esperando para emergir.",
    imagens: [
      {
        url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
        alt: "Esboço artístico em papel texturizado"
      },
      {
        url: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop",
        alt: "Textura detalhada de tinta preta sobre pele"
      }
    ]
  }
};

export const IMAGENS = {
  // Imagens gerais do sistema
};

// ==========================================
// PORTFOLIO ITEMS
// ==========================================
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
    {
        id: 1,
        title: "FLORA OBSCURA",
        placement: "Antebraço",
        image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "ATLAS",
        placement: "Costas",
        image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "GEOMETRIA SACRA",
        placement: "Ombro",
        image: "https://images.unsplash.com/photo-1565431665671-55447a06f35b?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "SERPENTINE",
        placement: "Braço",
        image: "https://images.unsplash.com/photo-1590246296335-e11dd82eb619?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "MEMENTO MORI",
        placement: "Peito",
        image: "https://images.unsplash.com/photo-1590520637380-60df0897b77f?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "ETHEREAL HANDS",
        placement: "Costela",
        image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=800&auto=format&fit=crop"
    }
];

// ==========================================
// PROCESSO CRIATIVO
// ==========================================
export const PROCESSO_CRIATIVO: ProcessoCriativoItem[] = [
  {
    id: 1,
    titulo: "Briefing",
    subtitulo: "Você traz a ideia. A gente transforma em desenho.",
    descricao: "Você conta sua ideia, referências, sentimentos e intenções. A partir disso, transformamos sua história em um conceito visual único, criado exclusivamente para você."
  },
  {
    id: 2,
    titulo: "Estudo Anatômico",
    subtitulo: "Cada corpo é único, e o nosso desenho precisa respeitar isso.",
    descricao: "Em alguns casos, solicitamos fotos da região a ser tatuada para desenvolver o projeto com melhor encaixe anatômico e, quando necessário, apresentar uma simulação no corpo, ajudando você a visualizar o resultado final."
  },
  {
    id: 3,
    titulo: "Sketching",
    subtitulo: "Hora de rabiscar.",
    descricao: "Criamos de 1 a 4 sketches, refinando o desenho conforme necessário, até que o projeto esteja alinhado com sua expectativa e nossa proposta artística."
  },
  {
    id: 4,
    titulo: "Sessão",
    subtitulo: "Ambiente seguro, materiais regulamentados e foco total no trabalho.",
    descricao: "Sem distrações. Sem improviso."
  }
];

// ==========================================
// PREPARO (NOVO)
// ==========================================
export const ITENS_PREPARO: PreparoItem[] = [
  {
    id: 1,
    titulo: "Hidratação",
    descricao: "Sua pele é nossa base.\n Beba bastante água ao longo da semana anterior à sessão e hidrate a região a ser tatuada de 2 a 3 vezes ao dia."
  },
  {
    id: 2,
    titulo: "Descanso",
    descricao: "Durma bem na noite anterior e esteja bem alimentado.\n Uma refeição reforçada ajuda a evitar quedas de pressão."
  },
  {
    id: 3,
    titulo: "Zero Álcool",
    descricao: "Não consuma bebidas alcoólicas 24h antes. O álcool afina o sangue, aumentando o sangramento durante o processo, o que expulsa o pigmento e dificulta o trabalho."
  },
  {
    id: 4,
    titulo: "Vestimenta",
    descricao: "Venha com roupas confortáveis, pretas ou escuras (tinta pode respingar). Garanta fácil acesso à área a ser tatuada sem comprimir o local e permitindo a circulação."
  }
];

// ==========================================
// PROTOCOLO DE CUIDADOS (AFTERCARE)
// ==========================================
export const ITENS_CUIDADOS: ProtocoloItem[] = [
  {
    fase: 'FASE I',
    titulo: 'A Cicatrização',
    descricao: 'Mantenha o curativo original por pelo menos 6 a 12 horas. Este é o período crítico onde a pele inicia o processo de vedação.',
    lista: [
      'Lave com cuidado e hidrate 2 a 3x ao dia',
      'Não coce, não puxe casquinhas',
      'Evite sol e roupas apertadas',
      'Protetor solar sempre que exposta'
    ]
  },
  {
    fase: 'FASE II',
    titulo: 'Hidratação',
    descricao: 'A partir do segundo dia, aplique uma camada fina de pomada específica. O excesso de umidade pode prejudicar tanto quanto o ressecamento.',
    lista: [
      'Aplique 2 a 3 vezes ao dia',
      'Jamais remova as crostas (casquinhas)',
      'Permita que a pele respire naturalmente'
    ]
  },
  {
    fase: 'FASE III',
    titulo: 'Proteção',
    descricao: 'A proteção a longo prazo garante que as linhas permaneçam nítidas e os pigmentos vibrantes por décadas.',
    lista: [
      'Sem sol, mar ou piscina por 15 dias',
      'Use protetor solar FPS 50+ após 30 dias',
      'Mantenha a hidratação corporal diária'
    ]
  }
];

// ==========================================
// FAQ
// ==========================================
export const ITENS_FAQ: FAQItem[] = [
  {
    id: 1,
    pergunta: "Qual o valor da sessão?",
    resposta: "O valor depende do projeto, não do relógio.",
    detalhes: [
      "Complexidade, região e materiais.",
      "Sinal de 30% para confirmação da data."
    ]
  },
  {
    id: 2,
    pergunta: "Você cria artes exclusivas?",
    resposta: "A exclusividade é a base do meu trabalho. Não copio tatuagens.",
    detalhes: [
      "Desenho criado para sua anatomia",
      "Referências são apenas inspiração",
      "Projeto apresentado no dia da sessão"
    ]
  },
  {
    id: 3,
    pergunta: "Dói muito?",
    resposta: "A dor é psicológica e física. O ambiente é preparado para minimizá-la.",
    detalhes: [
      "Mãos leves e máquinas modernas",
      "Anestésicos tópicos disponíveis (opcional)",
      "Pausas estratégicas durante a sessão"
    ]
  },
  {
    id: 4,
    pergunta: "Posso levar acompanhante?",
    resposta: "O estúdio é um ambiente de foco e intimidade.",
    detalhes: [
      "Permitido 1 acompanhante maior de idade",
      "Não permitimos crianças ou animais",
      "Ambiente privado e seguro"
    ]
  },
  {
    id: 5,
    pergunta: "Uso tinta vegana?",
    resposta: "Não trabalhamos com tintas veganas, pois até o momento não há opções autorizadas pela ANVISA.",
    detalhes: []
  },
  {
    id: 6,
    pergunta: "Para sua tattoo ficar sempre impecável",
    resposta: "Mantenha-se hidratado: beba água e use hidratante regularmente",
    detalhes: []
  },
  {
    id: 7,
    pergunta: "Quer realçar a tattoo?",
    resposta: "Antes de sair, aplique hidratante, protetor solar (durante o dia) e finalize com um toque de vaselina, o resultado é brilho e definição instantânea",
    detalhes: []
  }
];


export const WHATSAPP_PHONE = "5511999999999";

// ==========================================
// REDES SOCIAIS
// ==========================================
export const REDES_SOCIAIS: LinkSocial[] = [
  { nome: 'WhatsApp', url: `https://wa.me/${WHATSAPP_PHONE}?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento.` },
  { nome: 'Instagram', url: 'https://instagram.com/' },
  { nome: 'E-mail', url: 'mailto:contato@wsiqueira.com' },
];