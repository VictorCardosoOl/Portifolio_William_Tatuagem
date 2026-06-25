# Prompt Detalhado: Seção de FAQ Premium com Layout Assimétrico e Animações

Este prompt foi elaborado para replicar a seção de "Dúvidas Frequentes" com qualidade de design editorial, comportamento responsivo refinado e animações de alta fidelidade.

---

**Role:** Atue como um **Creative Developer Sênior** especializado em React, Tailwind CSS e Motion Design (GSAP).

**Objetivo:** Desenvolver um componente de **FAQ (Perguntas Frequentes)** com layout assimétrico, tipografia sofisticada e micro-interações fluidas. O componente deve transmitir uma sensação de "luxo" e organização.

### 1. Especificações de Layout (Grid & Responsividade)

*   **Mobile (< 1024px):** Layout de coluna única. O cabeçalho (título) fica no topo, seguido pela lista de perguntas logo abaixo.
*   **Desktop (≥ 1024px):** Utilize um **Grid de 12 colunas**.
    *   **Coluna Esquerda (Sticky):** Ocupa as colunas **1 a 4**. Deve conter o título, subtítulo e botão de contato. Use `position: sticky` (`top-32`) para que este conteúdo acompanhe o usuário enquanto ele rola a lista de perguntas.
    *   **Espaço Negativo (Gap):** A coluna 5 deve ficar vazia para criar respiro visual.
    *   **Coluna Direita (Lista):** Ocupa as colunas **6 a 12**. Contém a lista de perguntas (Accordion).

### 2. Estilo Visual e Tipografia (Tailwind CSS)

*   **Paleta de Cores:** Suporte a **Dark Mode**.
    *   Light: Fundo Off-White/Creme (`bg-[#EBE9E4]`), Texto Preto/Cinza Chumbo.
    *   Dark: Fundo Preto Suave (`bg-[#0a0a0a]`), Texto Branco/Cinza Claro.
    *   Bordas: Linhas muito sutis (`border-black/10` ou `border-white/10`).
*   **Tipografia:** Contraste entre "Editorial" e "Técnico".
    *   **Títulos:** Fonte Serifada (ex: `font-serif`), tamanhos grandes (6xl a 8xl), `leading` apertado (0.85).
    *   **Rótulos/Labels:** Fonte Sans-serif, tamanho pequeno (xs), caixa alta (`uppercase`), espaçamento entre letras largo (`tracking-widest`).
    *   **Corpo:** Fonte Sans-serif ou Serif de leitura, tamanho confortável, boa altura de linha.

### 3. Comportamento do Acordeão (Lógica React)

*   **Estado:** Apenas **um** item pode estar aberto por vez. Ao clicar em um novo item, o anterior deve fechar automaticamente.
*   **Interação (Clique):**
    *   O título da pergunta ativa deve deslizar levemente para a direita (`translate-x-4`).
    *   A cor do título deve mudar para indicar atividade (ex: de cinza para preto/branco).
    *   O ícone (seta ou +) deve rotacionar ou mudar de estado.
*   **Animação de Altura:** O conteúdo da resposta deve expandir/colapsar suavemente (use `grid-template-rows` transition ou uma biblioteca como `framer-motion` / `gsap` para altura `auto`).

### 4. Motion Design (GSAP ScrollTrigger)

Implemente animações de entrada acionadas pelo scroll:

1.  **Sticky Header Reveal:** O conteúdo da esquerda deve entrar vindo de baixo (`y: 80`), com opacidade, de forma lenta e elegante (`duration: 1.4`, `ease: "power4.out"`).
2.  **Waterfall List:** Os itens da lista de perguntas devem entrar em **cascata** (`stagger: 0.15`). Cada item entra vindo de baixo (`y: 40`) com fade-in.
3.  **Delay:** A lista deve começar a animar ligeiramente depois do cabeçalho para criar hierarquia visual.

### 5. Exemplo de Estrutura de Código (Skeleton)

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Plus } from 'lucide-react';

// Dados mockados
const FAQ_ITEMS = [
  { id: 1, question: "Qual o valor da sessão?", answer: "..." },
  { id: 2, question: "Como funciona a criação?", answer: "..." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef(null);

  // Lógica do Accordion
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animações GSAP
  useEffect(() => {
    // Implementar ScrollTrigger aqui:
    // 1. Animar .sticky-content (Esquerda)
    // 2. Animar .faq-item (Direita) com stagger
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#EBE9E4] dark:bg-[#0a0a0a]">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* COLUNA ESQUERDA (Sticky) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky-content lg:sticky lg:top-32">
            <span className="text-xs font-bold tracking-widest uppercase mb-4 block">Suporte</span>
            <h2 className="font-serif text-7xl mb-8">Dúvidas <br/> <span className="italic opacity-50">Frequentes</span></h2>
            {/* Botão de Contato */}
          </div>
        </div>

        {/* COLUNA DIREITA (Lista) */}
        <div className="lg:col-span-7 lg:col-start-6">
          {FAQ_ITEMS.map((item, idx) => (
            <div key={item.id} className="faq-item border-b border-black/10 dark:border-white/10">
              <button 
                onClick={() => toggleItem(idx)}
                className="w-full py-10 flex justify-between items-center text-left group"
              >
                <h3 className={`text-3xl font-serif transition-transform duration-500 ${openIndex === idx ? 'translate-x-4' : ''}`}>
                  {item.question}
                </h3>
                <Plus className={`transition-transform duration-500 ${openIndex === idx ? 'rotate-45' : ''}`} />
              </button>
              
              {/* Área de Resposta (Expandable) */}
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-96 opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
                <p className="text-lg opacity-80 max-w-2xl">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
```

---

### Checklist de Qualidade

- [ ] O layout quebra graciosamente para coluna única no mobile?
- [ ] O conteúdo "Sticky" para de fixar quando a seção termina?
- [ ] As animações respeitam a preferência `prefers-reduced-motion`?
- [ ] A tipografia mantém a legibilidade em telas pequenas?
