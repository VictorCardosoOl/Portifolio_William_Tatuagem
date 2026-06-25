export interface ProtocoloItem {
  fase: string;
  titulo: string;
  descricao: string;
  lista: string[];
}

export interface FAQItem {
  id: number;
  pergunta: string;
  resposta: string;
  detalhes: string[];
}

export interface LinkSocial {
  nome: string;
  url: string;
}

export interface ProcessoCriativoItem {
  id: number;
  titulo: string;
  subtitulo: string;
  descricao: string;
}

export interface PreparoItem {
  id: number;
  titulo: string;
  descricao: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  placement: string;
  image: string;
}