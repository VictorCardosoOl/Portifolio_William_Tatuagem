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
        title: "Black works",
        placement: "Antebraço",
        image: "/black-work/jaguar.jpg",
        description: "Um estilo que usa e abusa apenas da tinta preta para criar diversos desenhos que podem variar de padrões a ilustrações elaboradas. Trabalhando o contraste do espaço pintado e o negativo, criando uma profundidade e complexidade na arte. o projeto não precisa ser necessariamente grande, a meta aqui é ele ser especial, pensado para seguir o formato do seu corpo,eternizado pela tinta",
        gallery: [
            "/black-work/jaguar.jpg",
            "/black-work/Copy-of-06.jpg",
            "/black-work/Copy-of-20260207_195712.jpg",
            "/black-work/Copy-of-20260207_220529.jpg"
        ]
    },
    {
        id: 2,
        title: "Neotradicional",
        placement: "Costas",
        image: "/Neotradicional/Copy-of-IMG_20260210_222305.jpg",
        description: "Um estilo que ainda está sendo escrito na história da tatuagem, um estilo que bebe do estilo Old school (linhas grossas e cores primárias) e traz consigo os avanços tecnológicos, como agulhas mais delicadas e uma paleta de cores diversificada, com isso o neotradicional não tem limitações, o estilo perfeito para tirar a ideia da sua cabeça e aplicarmos na sua pele.",
        gallery: [
            "/Neotradicional/Copy-of-Srexer.jpg",
            "/Neotradicional/Copy-of-4.jpg",
            "/Neotradicional/Copy-of-IMG_20260210_222305.jpg",
            "/Neotradicional/WhatsApp-Image-2026-06-22-at-23.59.24.jpeg"
        ]
    },
    {
        id: 3,
        title: "Pontilhismo",
        placement: "Ombro",
        image: "/Pontilhismo/3362fab3998990d7a91d11d6a156342e.jpg",
        description: "O estilo perfeito para a primeira tatuagem pois o estilo exige uma técnica menos agressiva, machucando menos a pele. Em vez de riscar a pele do cliente, cada ponto é feito um de cada vez, de ponto em ponto surge o desenho.\n\nUma experiência vendo de longe e outra vendo de perto, um estilo sofisticado e de grande impacto visual. A técnica permite uma abrangência de representações desde figuras geométricas, animais, símbolos, minimalistas, um estilo versátil e marcante.",
        gallery: [
            "/Pontilhismo/Copy-of-05.jpg",
            "/Pontilhismo/Copy-of-IMG_20250308_183730.jpg",
            "/Pontilhismo/32fe2662abee44eb7c4a716000540853.jpg",
            "/Pontilhismo/3362fab3998990d7a91d11d6a156342e.jpg",
            "/Pontilhismo/WhatsApp-Image-2026-06-23-at-00.07.13.jpeg"
        ]
    },
    {
        id: 4,
        title: "Poke tattoo",
        placement: "Braço",
        image: "/Poke-tattoo/20-Sem-Título6_20260623001035.jpg",
        description: "O estilo perfeito para a primeira tatuagem pois o estilo exige uma técnica menos agressiva, machucando menos a pele. Em vez de riscar a pele do cliente, cada ponto é feito um de cada vez, de ponto em ponto surge o desenho.\n\nUma experiência vendo de longe e outra vendo de perto, um estilo sofisticado e de grande impacto visual. A técnica permite uma abrangência de representações desde figuras geométricas, animais, símbolos, minimalistas, um estilo versátil e marcante.",
        gallery: [
            "/Poke-tattoo/15-Sem-Título2_20260623001111.jpg",
            "/Poke-tattoo/20-Sem-Título5_20260623001212.jpg",
            "/Poke-tattoo/20-Sem-Título6_20260623001035.jpg",
            "/Poke-tattoo/20-Sem-Título7_20260623000938.jpg",
            "/Poke-tattoo/Copy-of-Copy-of-IMG_20250308_183730.jpg",
            "/Poke-tattoo/Copy-of-WhatsApp-Image-2026-06-23-at-00.07.13.jpeg"
        ]
    },
    {
        id: 5,
        title: "Flashes",
        placement: "Peito",
        image: "/Flashes/Copy-of-03.jpg",
        description: "Você chega com a vontade de tatuar e nós chegamos com o desenho.\nFlashes são desenhos prontos a disposição para quem chegar e escolher, pronto vamos tatuar.\nVenha conhecer nosso cardápio de desenhos, servimos conceito, humor e o que mais você quiser, mesmo que você esteja lá para uma tatuagem planejada, sempre vale a pena dar aquela conferida nosso ‘’cardápio’’.\n\nse você for uma pessoa gulosa hehehe o Flash day é para você.\nO dia inteiro dedicado ao seu dispor para tatuar quantas tattoos couberem nas 6 horas do flash day, claro com intervalos para descanso e pausa para o café, (não contabilizados nas 6 horas), fazemos a lista e a ordem de execução para sair do estúdio como um gibi humano rsrsrs.",
        gallery: [
            "/Flashes/Copy-of-03.jpg",
            "/Flashes/Copy-of-01.jpg",
            "/Flashes/Copy-of-IMG_20250203_205253.jpg",
            "/Flashes/Copy-of-IMG_20250324_002943.jpg",
            "/Flashes/Copy-of-IMG_20250324_003006.jpg",
            "/Flashes/Copy-of-IMG_20250324_003041.jpg",
            "/Flashes/Copy-of-IMG_20250909_220640_1.jpg",
            "/Flashes/Copy-of-IMG_20251119_210511.jpg"
        ]
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
    descricao: "Você conta sua ideia, referências, sentimentos e intenções, nós criamos uma arte exclusivamente para você."
  },
  {
    id: 2,
    titulo: "Estudo Anatômico",
    subtitulo: "Cada corpo é único — e o nosso desenho precisa respeitar isso.",
    descricao: "Em alguns casos, solicitamos fotos da região a ser tatuada para desenvolver o projeto com melhor encaixe anatômico e, apresentamos um mockup no corpo, ajudando a visualizar o resultado."
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
// CUIDADOS PRÉ E PÓS
// ==========================================
export const CUIDADOS_PRE = [
  "Pele bem hidratada é o maior segredo!",
  "Beba bastante água ao longo da semana anterior à sessão",
  "Hidrate a região a ser tatuada de 2 a 3 vezes ao dia",
  "Durma bem na noite anterior",
  "Esteja bem alimentado",
  "Venha com roupas confortáveis, leves e folgadas"
];

export const CUIDADOS_POS = [
  "Retire o “curativo” após 6 a 12h",
  "Lave com cuidado, sem esfregar",
  "Hidrate a região duas vezes ao dia com cremes hipoalergênicos",
  "Não coce, não puxe casquinhas (caso haja incômodos, passe um paninho umedecido ou dê leves batidinhas)",
  "Evite sol e roupas apertadas",
  "Protetor solar sempre que a pele tatuada estiver exposta",
  "Evite multidões e contato direto com a pele",
  "Alimentação: coma o que está habituado sem exageros, evite alimentos que te deem sensibilidade ou alergia"
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
    resposta: "Cada corpo reage de um jeito. Consulte o mapa de dor para ter uma noção. O mapa é para apenas dar uma ideia, mas não é uma regra há pessoas que tem áreas mais sensíveis que as outras",
    detalhes: [
      "Mãos leves e máquinas modernas",
      "Anestésicos tópicos disponíveis (opcional)",
      "Pausas estratégicas durante a sessão"
    ]
  },
  {
    id: 4,
    pergunta: "Posso levar acompanhante?",
    resposta: "O estúdio é um ambiente de foco e intimidade. Permitido um acompanhante por sessão desde que seja maior de 18 anos e avisado com antecedência.",
    detalhes: [
      "Permitido 1 acompanhante maior de idade",
      "Não permitimos crianças ou animais",
      "Ambiente privado e seguro"
    ]
  },
  {
    id: 5,
    pergunta: "Uso tinta vegana?",
    resposta: "Todos os materiais utilizados são aprovados pelas normas da ANVISA, tintas veganas devem ser solicitadas no momento do orçamento.",
    detalhes: []
  },
  {
    id: 6,
    pergunta: "Há cobrança para realizar um orçamento?",
    resposta: "Não, Orçamento tem um prazo de 30 dias corridos, após esse tempo será gerado um novo orçamento",
    detalhes: []
  },
  {
    id: 7,
    pergunta: "Primeira tatuagem?",
    resposta: "Recomendamos que o desenho seja pequeno, consulte nosso mapa de dor para evitar lugares muito sensíveis na primeira vez",
    detalhes: []
  },
  {
    id: 8,
    pergunta: "Cicatrização",
    resposta: "A tatuagem leva de 21 a 45 dias para cicatrização total, variando de acordo com parte do corpo, idade e saúde da pessoa.",
    detalhes: []
  },
  {
    id: 9,
    pergunta: "Retoques",
    resposta: "Nem sempre a necessidade de um retorno, motivos que podem levar a isso são\nCorpo reagindo a tinta\nCuidados com a tatuagem no período de cicatrização",
    detalhes: []
  },
  {
    id: 10,
    pergunta: "Cor mudando ao longo do tempo",
    resposta: "A tattoo pode ficar mais clara depois de cicatrizada,é natural, mudanças maiores se deve por falta de cuidados a longo prazo, falta de hidratação e excessiva exposição solar.",
    detalhes: []
  },
  {
    id: 11,
    pergunta: "Depilação a laser e tatuagem",
    resposta: "Esse tipo de depilação deve ser evitada em regiões tatuadas pois o processo pode acarretar em queimaduras e desbotamento da região tatuada.",
    detalhes: []
  },
  {
    id: 12,
    pergunta: "Posso doar sangue?",
    resposta: "Após 12 meses",
    detalhes: []
  },
  {
    id: 13,
    pergunta: "Tenho diabetes posso tatuar?",
    resposta: "Consulte seu médico antes de tatuar, de modo geral com diabetes controlada é seguro tatuar.",
    detalhes: []
  },
  {
    id: 14,
    pergunta: "Pessoas grávidas podem tatuar?",
    resposta: "Não, apenas autorizado tatuar após o desmame da criança.",
    detalhes: []
  },
  {
    id: 15,
    pergunta: "Para sua tattoo ficar sempre impecável",
    resposta: "Mantenha-se hidratado: beba água e use hidratante regularmente",
    detalhes: []
  },
  {
    id: 16,
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