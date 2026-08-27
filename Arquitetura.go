// 📁 Mapeamento de Estrutura do Projeto
//
// Portifolio_William_Tatuagem/
// ├── app/                             // Diretório raiz do Next.js (App Router)
// │   ├── globals.css                  // Estilos globais e configurações do Tailwind
// │   ├── layout.tsx                   // Layout principal, contendo metadados e estrutura HTML/body
// │   ├── not-found.tsx                // Página customizada de erro 404
// │   ├── page.tsx                     // Ponto de entrada da página principal (Landing Page)
// │   └── eco/                         // Rota do hub de links (Ecosistema/LinkTree)
// │       ├── eco.css                  // Estilos específicos da página eco
// │       ├── liquid-glass.ts          // Script de efeitos visuais e animações
// │       └── page.tsx                 // Componente da página de links
// ├── components/                      // Componentes React
// │   ├── About.tsx                    // Seção "Sobre"
// │   ├── ChatWidget.tsx               // Widget flutuante de chat
// │   ├── Concept.tsx                  // Seção explicativa do conceito do estúdio
// │   ├── CreativeProcess.tsx          // Seção detalhando o processo criativo
// │   ├── FAQ.tsx                      // Seção de perguntas frequentes
// │   ├── FlashSection.tsx             // Seção exibindo flashes disponíveis
// │   ├── Footer.tsx                   // Rodapé global do site
// │   ├── Hero.tsx                     // Banner principal e chamativo da home
// │   ├── Lightbox.tsx                 // Componente para visualização ampliada de imagens
// │   ├── Manifesto.tsx                // Seção do manifesto artístico
// │   ├── Navbar.tsx                   // Barra de navegação principal
// │   ├── Portfolio.tsx                // Galeria de trabalhos realizados
// │   ├── Preloader.tsx                // Tela de carregamento inicial
// │   ├── Preparation.tsx              // Guia de preparação para tatuagem
// │   ├── ProgressiveImage.tsx         // Componente de carregamento otimizado de imagens
// │   ├── ProjectDetail.tsx            // Detalhamento de um projeto no portfólio
// │   └── StaggeredMenu.tsx            // Menu responsivo animado
// ├── config/                          // Configurações e dados estáticos
// │   ├── data.ts                      // Fonte de dados central (textos, links sociais, portfólio)
// │   └── types.ts                     // Definições de tipagem TypeScript (interfaces)
// ├── public/                          // Arquivos estáticos servidos publicamente
// │   ├── favicon.ico                  // Ícone do site
// │   ├── manifest.json                // Manifesto PWA
// │   ├── robots.txt                   // Regras para motores de busca
// │   ├── sitemap.xml                  // Mapa do site para SEO
// │   ├── about/                       // Imagens da seção sobre
// │   ├── black-work/                  // Imagens de trabalhos em black work
// │   ├── eco/                         // Imagens e fontes da página eco
// │   ├── Flashes/                     // Imagens de tatuagens flash
// │   ├── Neotradicional/              // Imagens de tatuagens neotradicionais
// │   ├── Poke-tattoo/                 // Imagens de poke tattoos
// │   └── Pontilhismo/                 // Imagens de pontilhismo
// ├── .eslintrc.json                   // Configurações do linter ESLint
// ├── .gitignore                       // Arquivos ignorados pelo Git
// ├── .prettierrc                      // Configurações de formatação de código (Prettier)
// ├── globals.d.ts                     // Declarações globais TypeScript
// ├── LICENSE                          // Licença do repositório
// ├── metadata.json                    // Metadados adicionais
// ├── next-env.d.ts                    // Tipagens injetadas pelo Next.js
// ├── next.config.js                   // Configurações do framework Next.js
// ├── package-lock.json                // Árvore exata de dependências instaladas
// ├── package.json                     // Dependências e scripts do projeto (NPM)
// ├── postcss.config.cjs               // Configurações de processamento CSS
// ├── README.md                        // Documentação principal do projeto
// ├── rename_script.cjs                // Script utilitário para renomeação de imagens
// ├── tailwind.config.cjs              // Configurações do framework CSS Tailwind
// ├── tsconfig.json                    // Configurações do compilador TypeScript
// └── vercel.json                      // Configurações de deploy na Vercel
//
// 🏗️ Arquitetura
// - /app: Utiliza o paradigma App Router do Next.js. É responsável por definir rotas, layouts e páginas de entrada.
// - /components: Concentra toda a lógica de renderização visual da aplicação. Agrupa partes menores da UI e seções inteiras que compõem as páginas, isolando lógicas do fluxo principal.
// - /config: Atua como uma camada de modelo/estado global estático. Centraliza textos e constantes de configuração para não deixar strings e dados espalhados pelos componentes (Dry & Single Source of Truth).
// - /public: Armazena exclusivamente conteúdos que não passam pelo bundle (webpack/turbopack), como fontes otimizadas, imagens em webp, mp4 e arquivos de meta e SEO.
//
// 🚀 Ponto de Entrada
// O software se inicia visualmente no arquivo `app/page.tsx` para a rota principal e `app/eco/page.tsx` para o hub de links. A arquitetura raiz é definida em `app/layout.tsx`.
// 
// ⚙️ Configurações
// Todo o comportamento estrutural e de build é gerido pelos arquivos na raiz:
// - `next.config.js`: Define o comportamento de exportação (output: 'export') e opções de build.
// - `tailwind.config.cjs`: Especifica design tokens e classes utilitárias baseadas em CSS.
// - `tsconfig.json`: Dita o comportamento do Type Checker e configura atalhos (paths) globais.
