# Prompt para Implementação de Scroll Cinemático e Interativo

Aqui está um prompt detalhado que você pode usar para solicitar este tipo de implementação em projetos futuros ou para refinar o atual.

---

**Role:** Atue como um Engenheiro Front-end Sênior especialista em Creative Coding, Motion Design e Performance Web.

**Contexto:** Estou desenvolvendo uma aplicação web "premium" utilizando **React**, **TypeScript** e **Tailwind CSS**. O objetivo é criar uma experiência de navegação fluida, sofisticada e com "peso" físico, similar a sites de awards (Awwwards/FWA).

**Objetivo Principal:** Implementar um sistema de **Smooth Scrolling (Rolagem Suave)** integrado com animações baseadas em scroll (**Scroll-Linked Animations**).

**Stack Tecnológica Obrigatória:**
1.  **Lenis** (para o smooth scroll - leve e performático).
2.  **GSAP (GreenSock)** + **ScrollTrigger** (para orquestrar as animações).

**Requisitos Detalhados da Implementação:**

### 1. Configuração do Smooth Scroll (Lenis)
-   Inicialize o **Lenis** no componente raiz (`App.tsx` ou layout principal).
-   Configure uma curva de inércia personalizada (`easing`) para que a rolagem pareça ter "peso" e não pare abruptamente.
-   **Importante:** Sincronize o Lenis com o `GSAP Ticker` para garantir que as animações do ScrollTrigger não fiquem "tremidas" (jittery) durante a rolagem. O Lenis deve atualizar o ScrollTrigger a cada frame.

### 2. Efeitos de Parallax (Profundidade)
-   Crie componentes onde elementos de fundo (imagens, títulos grandes) se movam em velocidades diferentes do scroll (`yPercent` ou `y`).
-   Use `scrub: true` ou um valor numérico (ex: `scrub: 1`) no ScrollTrigger para suavizar o movimento, criando uma sensação de "arrasto" físico.
-   *Exemplo:* Um título "Hero" que desce levemente e ganha `blur` conforme o usuário rola para baixo, desaparecendo suavemente.

### 3. Animações de Entrada (Reveal)
-   Implemente animações de "Reveal" para seções de texto e imagens.
-   Use `stagger` para animar listas ou grades (ex: itens de portfólio aparecendo um após o outro).
-   As animações devem ser acionadas quando o elemento entrar na viewport (`start: "top 80%"`).
-   Evite animações que rodam ao contrário (`toggleActions` ou `onLeaveBack`) para garantir que o conteúdo permaneça visível e acessível após ser lido.

### 4. Micro-interações Conectadas (Scrubbing)
-   Crie elementos gráficos (como linhas divisórias ou barras de progresso) que se desenham ou expandem (`scaleX` ou `width`) em sincronia direta com o scroll.
-   O movimento deve ser atrelado à posição da barra de rolagem: se o usuário para de rolar, a animação para.

### 5. Performance & Acessibilidade
-   Use `will-change: transform` em elementos pesados.
-   Certifique-se de que a rolagem nativa não seja completamente sequestrada (hijacked) de forma que impeça a navegação por teclado ou leitores de tela.
-   Desative animações pesadas se o usuário tiver a preferência `prefers-reduced-motion` ativada.

**Exemplo de Código Esperado (Snippet):**

```typescript
// Exemplo de integração Lenis + GSAP
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva exponencial
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Conectar ao GSAP
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
}, []);
```

---
