# Prompt Mestre V2: Estética "Editorial Brutalist & Organic Luxury"

Este prompt foi refinado para garantir que a IA gere interfaces de nível **Awwwards/Site of the Day**, com foco obsessivo em tipografia, grid e micro-interações. Use este prompt para qualquer nicho (Arquitetura, Moda, Gastronomia, Tech Premium).

---

**Role:** Atue como um **Lead Product Designer** e **Creative Developer** premiado.

**Objetivo:** Criar uma experiência web imersiva que funda o **Design Editorial Suíço** com o **Brutalismo Digital**. O resultado deve ser uma interface que pareça "curada" e "impressa", mas com a fluidez de uma aplicação nativa de alta performance.

### 1. Os 3 Pilares Visuais (The Holy Trinity)

1.  **Tipografia como Protagonista:** A tipografia não é apenas para ler, é para ver. Ela define a estrutura.
    *   **Display (Serif):** Use fontes como *Cormorant Garamond, Playfair Display* ou *Fraunces*.
        *   *Regra:* Tamanhos massivos (`text-6xl` a `text-[12vw]`), `leading-[0.85]` (apertado), `tracking-tighter` (-0.05em) e itálicos elegantes para ênfase.
    *   **Micro-Labels (Sans):** Use fontes como *Inter, Neue Montreal* ou *Geist*.
        *   *Regra:* `text-xs` (10-12px), `uppercase`, `tracking-[0.25em]` (muito largo), `font-bold`. Use-os para numerar seções (01, 02) ou categorizar conteúdo.

2.  **Grid & Estrutura (The Grid System):**
    *   **Linhas Visíveis:** Use bordas de 1px com `opacity-10` para desenhar o grid na tela. O usuário deve "sentir" a matemática do layout.
    *   **Espaço Negativo:** Não tenha medo de deixar 40-50% da tela vazia. O silêncio visual é luxo.
    *   **Alinhamento:** Misture alinhamentos. Títulos à esquerda, textos de apoio à direita, imagens centralizadas. Quebre a simetria para criar tensão visual.

3.  **Textura & Atmosfera (Organic Feel):**
    *   **Noise Overlay:** Adicione sempre uma camada de ruído (SVG filter ou imagem) com `mix-blend-overlay` e `opacity-5` para matar a "frieza" do branco digital.
    *   **Cores (Warm Monochrome):**
        *   *Fundo:* Creme (`#F6F5F0`), Areia (`#EBE9E4`) ou Off-White.
        *   *Tinta:* Carvão (`#1A1A1A`), Grafite (`#2D2D2D`) ou Marrom Profundo.
        *   *Dark Mode:* Inverta para Preto Suave (`#0F0F0F`) e Texto Osso (`#E5E5E5`).

### 2. Comportamento e Motion (GSAP + Lenis)

*   **A Física do Scroll:**
    *   Implemente **Lenis Scroll** para inércia.
    *   **Parallax:** Imagens devem mover-se 20% mais devagar que o scroll (`yPercent: 20`).
    *   **Scrubbing:** Linhas divisórias devem se desenhar (`width: 0% -> 100%`) conforme o usuário rola.
*   **Entradas (Reveals):**
    *   **Texto:** Use máscaras (`overflow-hidden`). O texto sobe (`y: 100% -> 0%`) de dentro da máscara. Nunca use apenas `opacity`.
    *   **Imagens:** Devem ter um "scale-down" suave (`scale: 1.2 -> 1.0`) ao entrar na viewport.
*   **Imagens:**
    *   Use filtros desaturados (`grayscale`) que ganham cor (`grayscale-0`) ao passar o mouse (Hover).
    *   Aspect Ratios editoriais: 4:5 (retrato), 16:9 (cinemático).

### 3. Componentes Obrigatórios

*   **Hero Section:**
    *   Título gigante ocupando 80-100% da largura.
    *   Navegação minimalista (apenas o essencial).
    *   Uma imagem ou vídeo de fundo com baixa opacidade ou máscara criativa.
*   **Listas/Tabelas:**
    *   Use linhas horizontais (`border-b`) para separar itens.
    *   Adicione numeração (01, 02, 03) em fonte mono ou sans.
    *   Hover: O item deve destacar-se (diminuir opacidade dos outros ou mudar de cor).
*   **Footer:**
    *   Gigante. Deve ocupar 50-80% da altura da tela.
    *   Título da marca enorme ao fundo (marca d'água).
    *   Grid de 4 colunas com informações úteis.

### 4. Tech Stack & Regras de Código

*   **React + TypeScript:** Tipagem forte.
*   **Tailwind CSS:** Use classes utilitárias para tudo.
    *   *Exemplo:* `className="font-serif text-[8vw] leading-none tracking-tighter text-[#1A1A1A]"`
*   **GSAP:** Use `useGSAP` hook ou `useEffect` com `gsap.context` para limpeza (cleanup).

---

**Exemplo de Prompt para Gerar Código (Copie e Cole):**

> "Crie uma Landing Page para [TEMA].
>
> **Estética:** Editorial Brutalist V2.
> **Cores:** Fundo #F2F0E9 (Papel), Texto #141414 (Nanquim).
> **Tipografia:** Títulos em 'Cormorant Garamond' (Itálico para destaque), Corpo em 'Inter'.
> **Layout:** Grid de 12 colunas com bordas visíveis (opacity-10).
> **Motion:** Smooth Scroll (Lenis), Parallax em imagens, Text Reveal por máscara.
> **Estrutura:**
> 1. Hero com título 'Full Bleed' (ponta a ponta).
> 2. Seção 'Sobre' com texto à direita e imagem à esquerda (assimetria).
> 3. Galeria horizontal (scroll trigger).
> 4. Footer massivo com grid de links.
> **Nota:** O código deve ser React + Tailwind + GSAP. Priorize a elegância e o espaço negativo."
