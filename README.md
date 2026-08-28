<div align="center">
  <br/>
  <h1>✒️ William Siqueira — Bespoke Tattoo Portfolio</h1>
  <p><strong>A convergência entre arte anatômica autoral e engenharia de software de alto desempenho.</strong></p>
  <p>Uma aplicação web editorial e imersiva desenvolvida para o estúdio privado do tatuador <strong>William Siqueira</strong> (Pinheiros, São Paulo - SP), combinando estética de alta-costura, animações baseadas em física e arquitetura orientada à conversão.</p>

  <div>
    <img src="https://img.shields.io/badge/Next.js%2016-Turbopack-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React%2018-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind%20CSS-Bespoke%20Design-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/GSAP%203-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
    <img src="https://img.shields.io/badge/Core%20Web%20Vitals-Optimized-success?style=for-the-badge" alt="Performance" />
    <img src="https://img.shields.io/badge/LGPD%20%26%20GA4-Compliant-blue?style=for-the-badge" alt="LGPD" />
  </div>
</div>

<br/>

---

## 🎯 O Produto & Visão de Negócio

Este projeto não é apenas um portfólio contemplativo — é uma **máquina de conversão de leads qualificados** desenvolvida sob medida para o artista e tatuador **William Siqueira**, cuja identidade artística é focada em projetos 100% autorais e adequação anatômica (especialidades em *Neotradicional*, *Blackwork*, *Fine Line* e *Pontilhismo*).

### 💡 Desafios de Negócio Resolvidos:
1. **Fricção de Contato e Briefing:** Em vez de direcionamentos genéricos, o sistema implementa **CTAs Contextualizados** — cada botão na aplicação injeta mensagens pré-formatadas diretamente no WhatsApp oficial, identificando a arte, a página de origem (*Hero*, *Galeria*, *Flash Day*, *Full Day* ou *Linktree /eco*) e a intenção do cliente.
2. **Autoridade e Valor Agregado:** Transmissão de exclusividade por meio de design editorial minimalista (*paper-light* / *dark mode*), eliminando a percepção de tatuagem como commodity e posicionando o estúdio no segmento *high-end*.
3. **Educação do Cliente ("O Ritual da Cicatrização"):** Seções dedicadas ao protocolo pré e pós-sessão que reduzem dúvidas operacionais no suporte diário e aumentam a fidelização do cliente.

---

## 🏗️ Arquitetura e Engenharia de Software

O projeto segue os princípios **SOLID, DRY, KISS e Clean Architecture**, desacoplando dados de apresentação através de uma camada estática única de verdade (`config/data.ts`).

```text
Portifolio_William_Tatuagem/
├── app/                        # Next.js 16 App Router (Arquitetura de Rotas e Layouts)
│   ├── layout.tsx              # Shell raiz: Fontes Google, JSON-LD Schema, GA4 assíncrono
│   ├── page.tsx                # Orquestrador da Landing Page principal (Server Component)
│   ├── not-found.tsx           # Página customizada 404
│   ├── eco/                    # Rota de alta conversão para Link in Bio (/eco)
│   └── globals.css             # Tokens do Tailwind e design system
├── components/                 # Componentes React atomizados e acessíveis
│   ├── Hero.tsx                # Banner com tipografia fluida e parallax GSAP
│   ├── Portfolio.tsx           # Grid editorial assimétrico com Lightbox integrado
│   ├── ProjectDetail.tsx       # Modal imersivo com navegação por teclado e foco isolado
│   ├── Preparation.tsx         # Protocolo pré e pós-tatuagem com tabs interativas
│   ├── FlashSection.tsx        # Módulos comerciais (Flash Day e Imersão Full Day)
│   ├── CookieBanner.tsx        # Banner de consentimento com persistência em localStorage
│   ├── LegalModal.tsx          # Modal acessível com abas para LGPD e Termos de Uso
│   └── StaggeredMenu.tsx       # Menu mobile full-screen com controle de foco (inert)
├── config/                     # Single Source of Truth (Configurações, dados e gerador de URLs)
│   ├── data.ts                 # Constantes, FAQs, portfólio e helper getWhatsAppUrl()
│   └── types.ts                # Contratos e tipagens TypeScript rigorosas
└── public/                     # Assets estáticos otimizados (WebP, SVGs, robots.txt, sitemap.xml, llms.txt)
```

---

## 📊 Inteligência de Dados & Métricas de Conversão

A aplicação conta com uma camada de **Business Intelligence (BI)** em tempo real, integrando **Google Analytics 4 (GA4)** e **Vercel Analytics** através de injeção assíncrona não-bloqueante (`next/script` com `strategy="lazyOnload"`).

```
[Visitante Navega no Site]
          ↓
[Disparo Assíncrono GA4 (Zero Impacto no LCP)]
          ↓
[Mapeamento de Funil e Conversão]:
  ├── Taxa de Cliques no WhatsApp por Seção (Hero vs Galeria vs Flash Day vs Rodapé)
  ├── Obras do Portfólio com Maior Interesse e Engajamento
  ├── Rastreamento de Origem de Tráfego (Instagram, Busca Orgânica Google, Acesso Direto)
  └── Monitoramento de Retenção e Comportamento por Dispositivo (Mobile vs Desktop)
```

> 🔒 **Segurança & Variáveis de Ambiente:** O identificador de medição do GA4 é injetado via variável de ambiente `NEXT_PUBLIC_GA_ID`, isolado em arquivos de ambiente locais e protegido contra exposição em commits públicos.

---

## 🛡️ Privacidade & Conformidade com a LGPD

O projeto cumpre com rigor as diretrizes da **Lei Geral de Proteção de Dados (Lei nº 13.709/2018)**:

* **Cookie Banner Flutuante:** Informa a utilização de cookies analíticos do GA4 e memoriza o consentimento do usuário no `localStorage` para evitar pop-ups invasivos e repetitivos.
* **Modal Legal Interativo (`LegalModal`):** Documenta com clareza o papel do estúdio como controlador de dados, o não compartilhamento de informações com terceiros, os canais para exercício dos direitos do titular (Art. 18 da LGPD) e os termos de propriedade intelectual sobre as artes autorais.

---

## 🤖 SEO Técnico Avançado & Otimização para IA (AEO)

A aplicação foi preparada tanto para os motores de busca tradicionais (Google, Bing) quanto para **mecanismos de resposta generativa baseados em IA (LLMs)**:

1. **Rich Snippets (Schema.org / JSON-LD):** Injeção estruturada na `<head>` catalogando o negócio como `ProfessionalService` e `LocalBusiness` em Pinheiros (SP), além de schemas de `Person` e `FAQPage`.
2. **Padrão `llms.txt` (llmstxt.org):** Arquivo padronizado na raiz pública para alimentar crawlers modernos como *ChatGPT-User*, *ClaudeBot* e *PerplexityBot* com dados canônicos sobre o estúdio.
3. **`sitemap.xml` & `robots.txt` Rigorosos:** Mapeamento de rotas públicas com diretivas explícitas de permissão e bloqueio de endpoints internos.

---

## ⚡ Performance & Core Web Vitals

A interface foi lapidada para alcançar notas de excelência no Google PageSpeed Insights:

* **Largest Contentful Paint (LCP) < 1.5s:** Transição de preloader ultrarrápida combinada com carregamento assíncrono de imagens (`decoding="async"` e `loading="lazy"`).
* **Cumulative Layout Shift (CLS) = 0:** Preservação estrita de proporções de aspecto (`aspect-ratio`) em todos os cards e banners.
* **Total Blocking Time (TBT) = 0ms:** Eliminação de scripts pesados de terceiros e delegação de animações complexas para a GPU via GSAP.
* **Acessibilidade WCAG AA (Nota 100):** Headings perfeitamente sequenciados (`h1` ➔ `h2` ➔ `h3`), contraste mínimo de 4.5:1 em todos os elementos de texto e isolamento de foco via atributo `inert` em menus fechados.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Finalidade |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (Turbopack) | Server Components, rotas estáticas e bundling de alta velocidade |
| **Linguagem** | TypeScript 5.8 | Tipagem estática rigorosa e segurança em tempo de compilação |
| **Estilização** | Tailwind CSS 4.0 | Design System utilitário e tipografia editorial responsiva |
| **Animações** | GSAP 3 + ScrollTrigger | Coreografia visual, timelines e parallax de alta precisão |
| **Cinemática** | Lenis Smooth Scroll | Rolagem inercial suave desacoplada da thread de renderização |
| **Ícones** | Lucide React | Ícones vetoriais nativos, leves e consistentes |
| **Métricas** | Google Analytics 4 + Vercel Analytics | Rastreamento analítico de conversões e tráfego |

---

## 🚀 Como Executar Localmente

### Pré-requisitos
* Node.js 18+ instalado
* NPM ou Yarn

```bash
# 1. Clone o repositório
git clone https://github.com/VictorCardosoOl/Portifolio_William_Tatuagem.git

# 2. Acesse a pasta do projeto
cd Portifolio_William_Tatuagem

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente (Opcional)
cp .env.example .env.local

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar a aplicação.

---

## 🧑‍💻 Autor & Créditos

**Desenvolvimento & Engenharia de Software:** [Victor Cardoso](https://victor-cardoso-dev.vercel.app/)  
**Artista & Tatuador:** William Siqueira (Pinheiros, São Paulo - SP)

---

## 📄 Licença

Este projeto é protegido sob a licença [GPL-3.0](LICENSE). As imagens e conceitos de tatuagem pertencem exclusivamente a William Siqueira.
