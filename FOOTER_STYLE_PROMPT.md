# Prompt Detalhado: Footer "Editorial Brutalist" com Textura e Grid

Este prompt foi desenhado para replicar o estilo de rodapé (Footer) sofisticado, com grid visível, tipografia de impacto e texturas sutis.

---

**Role:** Atue como um **Designer de Interface (UI)** e **Desenvolvedor Frontend** especialista em layouts editoriais e tipografia web.

**Objetivo:** Criar um componente de **Footer (Rodapé)** que combine estética minimalista, estrutura de grid rígida e elementos orgânicos (textura de papel/ruído). O design deve transmitir solidez, elegância e organização.

### 1. Estrutura Visual (Grid & Bordas)

*   **Layout de Grade:** Utilize um **Grid CSS** responsivo.
    *   **Mobile:** 1 coluna.
    *   **Tablet:** 2 colunas.
    *   **Desktop:** 4 colunas iguais.
*   **Bordas Visíveis:** As divisões entre as células do grid devem ser visíveis, mas sutis.
    *   Use bordas de 1px com baixa opacidade (ex: `border-black/10` ou `border-white/10`).
    *   **Atenção:** Remova as bordas externas ou duplas (ex: `border-r-0` na última coluna) para manter o visual limpo.
*   **Interatividade (Hover):** Cada célula do grid deve reagir ao mouse.
    *   Ao passar o mouse sobre uma célula (ex: "Localização" ou "Social"), a cor de fundo deve mudar suavemente (ex: de transparente para um cinza/creme muito claro com 50% de opacidade).
    *   Use `transition-colors duration-500` para suavidade.

### 2. Tipografia e Hierarquia

*   **Tipografia de Fundo (Background):**
    *   Adicione um título gigante (ex: nome da marca) posicionado ao fundo, na parte inferior (`bottom-0`).
    *   Use um tamanho massivo (`text-[15vw]` ou fluido), fonte Serifada em negrito.
    *   **Opacidade:** Muito baixa (ex: `opacity-[0.05]` ou `0.1`), servindo apenas como textura visual/marca d'água.
    *   `pointer-events-none` e `select-none` para não interferir na interação.
*   **Tipografia de Conteúdo:**
    *   **Títulos/Headings:** Fonte Serifada (ex: Cormorant Garamond), tamanhos médios (3xl/4xl).
    *   **Rótulos/Labels:** Fonte Sans-serif (ex: Inter/Helvetica), tamanho pequeno (xs), caixa alta (`uppercase`), espaçamento largo (`tracking-[0.25em]`), peso Bold.
    *   **Texto Corrido:** Fonte Sans-serif, tamanho base, boa altura de linha.

### 3. Textura e Atmosfera (Noise)

*   **Efeito de Ruído (Noise):** Para evitar que o fundo sólido pareça "chapado" ou digital demais, adicione uma camada de ruído.
    *   Use um **SVG Filter** (`feTurbulence`) em uma `div` absoluta cobrindo todo o footer (`inset-0`).
    *   **Blend Mode:** `mix-blend-multiply` (light mode) ou `mix-blend-overlay` (dark mode).
    *   **Opacidade:** Baixíssima (ex: `0.03` a `0.05`). Isso dá uma sensação de "papel" ou "grão de filme".

### 4. Conteúdo das Colunas (Sugestão)

1.  **Identidade:** Logo, slogan ("Fine Line & Art") e ano de estabelecimento.
2.  **Localização/CTA:** Endereço físico e um botão de ação (ex: "Agendar Visita") com ícone (seta).
3.  **Conexões (Social):** Lista de links para redes sociais.
4.  **Navegação/Legal:** Links rápidos do site e Copyright.

### 5. Exemplo de Código (Estrutura Base)

```tsx
import React from 'react';

const EditorialFooter = () => {
  return (
    <footer className="relative w-full bg-[#F6F5F0] dark:bg-[#0c0a09] text-[#1A1A1A] dark:text-[#e7e5e4] overflow-hidden">
      
      {/* 1. TEXTURA DE RUÍDO (SVG) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-multiply">
        <svg className="w-full h-full">
            <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* 2. TIPOGRAFIA DE FUNDO */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none z-0">
         <h1 className="font-serif font-bold text-[18vw] opacity-[0.08] leading-none tracking-tighter">
            BRANDNAME
         </h1>
      </div>

      {/* 3. GRID DE CONTEÚDO */}
      <div className="relative z-10 max-w-[1920px] mx-auto border-t border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* COLUNA 1 */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-black/10 hover:bg-black/5 transition-colors duration-500">
            <h2 className="font-serif text-4xl mb-2">Studio Title</h2>
            <span className="font-sans text-xs tracking-widest uppercase font-bold opacity-50">Est. 2024</span>
          </div>

          {/* COLUNA 2 */}
          <div className="p-12 border-b md:border-b-0 lg:border-r border-black/10 hover:bg-black/5 transition-colors duration-500">
             {/* Conteúdo... */}
          </div>

          {/* COLUNA 3 */}
          <div className="p-12 border-b md:border-b-0 md:border-r border-black/10 hover:bg-black/5 transition-colors duration-500">
             {/* Conteúdo... */}
          </div>

          {/* COLUNA 4 */}
          <div className="p-12 hover:bg-black/5 transition-colors duration-500">
             {/* Conteúdo... */}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default EditorialFooter;
```

---

### Dicas de Implementação

*   **Responsividade:** Certifique-se de que as bordas (`border-r`, `border-b`) sejam removidas ou adicionadas corretamente nos breakpoints (`md:`, `lg:`) para não criar linhas duplas ou bordas soltas.
*   **Cores:** Use cores "off-black" (`#1A1A1A`) e "off-white" (`#F6F5F0`) em vez de preto e branco puros para um visual mais orgânico e menos cansativo aos olhos.
