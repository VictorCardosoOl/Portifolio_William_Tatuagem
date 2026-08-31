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
  dataProximoEvento: "Agenda aberta neste mês",
  tituloPosCuidado: "A longevidade da sua arte depende da sua dedicação.",
  rodapeChamada: "Vamos conversar sobre a próxima marca que você quer carregar para sempre.", 
  rodapeTexto: "O suporte pós-tatuagem é vitalício. Se notar qualquer anormalidade, entre em contato imediatamente.",
  rodapeBotao: "Falar com o Especialista",
  endereco: [
    "Studio W. Siqueira",
    "Rua Baltazar Carrasco, 70",
    "Pinheiros, São Paulo - SP",
    "CEP: 05426-060",
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
        url: "/about/esquerda.webp",
        alt: "Artista tatuando em estúdio com iluminação focada"
      },
      {
        url: "/about/centro.webp",
        alt: "Detalhe de tatuagem geométrica em processo"
      },
      {
        url: "/about/direita.webp",
        alt: "Ambiente do estúdio com arte na parede e atmosfera calma"
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
        image: "/black-work/jaguar.webp",
        description: "Um estilo que usa e abusa apenas da tinta preta para criar diversos desenhos que podem variar de padrões a ilustrações elaboradas. Trabalhando o contraste do espaço pintado e o negativo, criando uma profundidade e complexidade na arte. o projeto não precisa ser necessariamente grande, a meta aqui é ele ser especial, pensado para seguir o formato do seu corpo,eternizado pela tinta",
        quote: "O contraste perfeito revela a essência oculta do corpo.",
        gallery: [
            "/black-work/jaguar.webp",
            "/black-work/black-work-01.webp",
            "/black-work/black-work-02.webp",
            "/black-work/black-work-03.webp"
        ]
    },
    {
        id: 2,
        title: "Neotradicional",
        placement: "Costas",
        image: "/Neotradicional/neotradicional-01.webp",
        description: "Um estilo que ainda está sendo escrito na história da tatuagem, um estilo que bebe do estilo Old school (linhas grossas e cores primárias) e traz consigo os avanços tecnológicos, como agulhas mais delicadas e uma paleta de cores diversificada, com isso o neotradicional não tem limitações, o estilo perfeito para tirar a ideia da sua cabeça e aplicarmos na sua pele.",
        quote: "O contraste perfeito revela a essência oculta do corpo.",
        gallery: [
            "/Neotradicional/neotradicional-01.webp",
            "/Neotradicional/neotradicional-02.webp",
            "/Neotradicional/neotradicional-03.webp",
            "/Neotradicional/neotradicional-05.webp"
        ]
    },
    {
        id: 3,
        title: "Pontilhismo",
        placement: "Ombro",
        image: "/Pontilhismo/3362fab3998990d7a91d11d6a156342e.webp",
        description: "O estilo perfeito para a primeira tatuagem pois o estilo exige uma técnica menos agressiva, machucando menos a pele. Em vez de riscar a pele do cliente, cada ponto é feito um de cada vez, de ponto em ponto surge o desenho.\n\nUma experiência vendo de longe e outra vendo de perto, um estilo sofisticado e de grande impacto visual. A técnica permite uma abrangência de representações desde figuras geométricas, animais, símbolos, minimalistas, um estilo versátil e marcante.",
        quote: "O contraste perfeito revela a essência oculta do corpo.",
        gallery: [
            "/Pontilhismo/pontilhismo-01.webp",
            "/Pontilhismo/pontilhismo-02.webp",
            "/Pontilhismo/32fe2662abee44eb7c4a716000540853.webp",
            "/Pontilhismo/3362fab3998990d7a91d11d6a156342e.webp",
            "/Pontilhismo/pontilhismo-03.webp"
        ]
    },
    {
        id: 4,
        title: "Poke tattoo",
        placement: "Braço",
        image: "/Poke-tattoo/20-Sem-Título6_20260623001035.webp",
        description: "O estilo perfeito para a primeira tatuagem pois o estilo exige uma técnica menos agressiva, machucando menos a pele. Em vez de riscar a pele do cliente, cada ponto é feito um de cada vez, de ponto em ponto surge o desenho.\n\nUma experiência vendo de longe e outra vendo de perto, um estilo sofisticado e de grande impacto visual. A técnica permite uma abrangência de representações desde figuras geométricas, animais, símbolos, minimalistas, um estilo versátil e marcante.",
        quote: "O contraste perfeito revela a essência oculta do corpo.",
        gallery: [
            "/Poke-tattoo/15-Sem-Título2_20260623001111.webp",
            "/Poke-tattoo/20-Sem-Título5_20260623001212.webp",
            "/Poke-tattoo/20-Sem-Título6_20260623001035.webp",
            "/Poke-tattoo/20-Sem-Título7_20260623000938.webp",
            "/Poke-tattoo/poke-tattoo-01.webp",
            "/Poke-tattoo/poke-tattoo-02.webp"
        ]
    },
    {
        id: 5,
        title: "Flashes",
        placement: "Peito",
        image: "/Flashes/flashes-01.webp",
        description: "Você chega com a vontade de tatuar e nós chegamos com o desenho.\nFlashes são desenhos prontos a disposição para quem chegar e escolher, pronto vamos tatuar.\nVenha conhecer nosso cardápio de desenhos, servimos conceito, humor e o que mais você quiser, mesmo que você esteja lá para uma tatuagem planejada, sempre vale a pena dar aquela conferida nosso ‘’cardápio’’.\n\nse você for uma pessoa gulosa hehehe o Flash day é para você.\nO dia inteiro dedicado ao seu dispor para tatuar quantas tattoos couberem nas 6 horas do flash day, claro com intervalos para descanso e pausa para o café, (não contabilizados nas 6 horas), fazemos a lista e a ordem de execução para sair do estúdio como um gibi humano rsrsrs.",
        quote: "O contraste perfeito revela a essência oculta do corpo.",
        gallery: [
            "/Flashes/flashes-01.webp",
            "/Flashes/flashes-02.webp",
            "/Flashes/flashes-03.webp",
            "/Flashes/flashes-04.webp",
            "/Flashes/flashes-05.webp",
            "/Flashes/flashes-06.webp",
            "/Flashes/flashes-07.webp",
            "/Flashes/flashes-08.webp"
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

export const ITENS_CUIDADOS = [
  {
    fase: "FASE 01",
    titulo: "Pré-Tatuagem",
    descricao: "O preparo começa antes do estúdio. Uma tela bem cuidada garante uma arte mais duradoura e uma sessão mais tranquila.",
    lista: CUIDADOS_PRE
  },
  {
    fase: "FASE 02",
    titulo: "Pós-Tatuagem",
    descricao: "A tatuagem é uma ferida aberta. O cuidado nos primeiros dias é vitalício para a integridade da sua arte.",
    lista: CUIDADOS_POS
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
      "Complexidade, região do corpo e materiais.",
      "Sinal de reserva para confirmação da data."
    ]
  },
  {
    id: 2,
    pergunta: "Você cria artes exclusivas?",
    resposta: "A exclusividade é a base do meu trabalho. Não copio tatuagens de outros artistas.",
    detalhes: [
      "Desenho personalizado para sua anatomia",
      "Referências visuais servem apenas de inspiração",
      "Projeto final alinhado para a sua história"
    ]
  },
  {
    id: 3,
    pergunta: "Dói muito fazer a tatuagem?",
    resposta: "A sensibilidade varia de acordo com cada organismo e com a região do corpo.",
    detalhes: [
      "Mãos leves e máquinas de alta precisão",
      "Pausas estratégicas de descanso durante a sessão",
      "Ambiente calmo e focado no seu conforto"
    ]
  },
  {
    id: 4,
    pergunta: "Posso levar acompanhante?",
    resposta: "O estúdio é um espaço privativo de imersão e foco. Permitido 1 acompanhante maior de idade por sessão, avisando previamente.",
    detalhes: [
      "Permitido 1 acompanhante maior de 18 anos",
      "Não permitimos animais ou crianças no ambiente de aplicação",
      "Foco total na segurança e biossegurança"
    ]
  },
  {
    id: 5,
    pergunta: "Uso tinta vegana?",
    resposta: "Todos os materiais utilizados são aprovados pelas normas da ANVISA. Tintas 100% veganas devem ser solicitadas no momento do orçamento.",
    detalhes: []
  },
  {
    id: 6,
    pergunta: "Há cobrança para realizar um orçamento?",
    resposta: "Não. A elaboração do orçamento e a conversa inicial de briefing são 100% gratuitas via WhatsApp.",
    detalhes: [
      "Validade do orçamento: 30 dias corridos",
      "Agendamento confirmado após pagamento do sinal"
    ]
  },
  {
    id: 7,
    pergunta: "Primeira tatuagem?",
    resposta: "Recomendamos que o desenho seja de tamanho moderado e em áreas com menor terminação nervosa para uma primeira experiência tranquila.",
    detalhes: []
  },
  {
    id: 8,
    pergunta: "Quanto tempo leva a cicatrização?",
    resposta: "A fase superficial cicatriza entre 21 e 45 dias, dependendo da hidratação e dos cuidados pós-sessão descritos no nosso protocolo.",
    detalhes: [
      "Suporte e acompanhamento contínuo",
      "Orientações completas entregues após a sessão"
    ]
  },
  {
    id: 9,
    pergunta: "Precisa de retoques?",
    resposta: "Nem sempre há necessidade de retorno. Fatores que influenciam incluem a resposta da pele à tinta e o cumprimento do protocolo de cicatrização nos primeiros dias.",
    detalhes: []
  },
  {
    id: 10,
    pergunta: "A cor muda ao longo do tempo?",
    resposta: "A tatuagem assenta na pele e clareia levemente após cicatrizada, o que é natural. A longevidade do contraste depende do uso de protetor solar e hidratação.",
    detalhes: []
  },
  {
    id: 11,
    pergunta: "Depilação a laser e tatuagem",
    resposta: "A depilação a laser deve ser rigorosamente evitada sobre áreas tatuadas, pois o feixe de laser é atraído pelo pigmento e pode causar queimaduras.",
    detalhes: []
  },
  {
    id: 12,
    pergunta: "Posso doar sangue após tatuar?",
    resposta: "Sim, de acordo com as normas sanitárias brasileiras, a doação pode ser feita após 12 meses da realização da tatuagem.",
    detalhes: []
  },
  {
    id: 13,
    pergunta: "Tenho diabetes, posso tatuar?",
    resposta: "Consulte seu médico previamente. Com a taxa glicêmica controlada e autorização médica, o procedimento é seguro.",
    detalhes: []
  },
  {
    id: 14,
    pergunta: "Pessoas grávidas ou lactantes podem tatuar?",
    resposta: "Não é recomendado tatuar durante a gravidez. O procedimento é autorizado com segurança após o período de desmame.",
    detalhes: []
  },
  {
    id: 15,
    pergunta: "Como manter a tattoo impecável?",
    resposta: "Mantenha a pele sempre hidratada bebendo água regularmente e aplicando hidratante corporal neutro diariamente.",
    detalhes: []
  },
  {
    id: 16,
    pergunta: "Dica para realçar o brilho da arte",
    resposta: "Antes de sair, aplique hidratante com protetor solar e finalize com um leve toque de pomada ou óleo vegetal para destacar o brilho das linhas.",
    detalhes: []
  }
];


export const WHATSAPP_PHONE = "5511977797131";

/**
 * Constrói a URL do WhatsApp com mensagem contextual codificada em UTF-8
 */
export function getWhatsAppUrl(mensagem: string = 'Olá, William! Gostaria de tirar dúvidas sobre o seu trabalho.'): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensagem)}`;
}

// ==========================================
// REDES SOCIAIS
// ==========================================
export const REDES_SOCIAIS: LinkSocial[] = [
  { nome: 'WhatsApp', url: getWhatsAppUrl('Olá, William! Gostaria de fazer um orçamento para minha tatuagem.') },
  { nome: 'Instagram', url: 'https://instagram.com/wsiqueira' },
  { nome: 'E-mail', url: 'mailto:willtintamais@gmail.com' },
];