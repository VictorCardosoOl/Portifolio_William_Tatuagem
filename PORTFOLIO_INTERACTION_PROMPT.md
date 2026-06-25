# Prompt para Replicar a Interação de Galeria / Modal Split-Screen

Este prompt foi desenhado para ser utilizado em IAs (como o próprio Gemini) com o objetivo de replicar ou criar novas interações inspiradas no modal de detalhes do projeto do William.

---

**Copie e cole o texto abaixo para solicitar uma interação semelhante em futuros componentes ou projetos:**

> "Crie um componente de Modal/Overlay em React utilizando TailwindCSS e GSAP, seguindo um design 'Split-Screen' premium e minimalista. O modal deve ocupar 100% da tela (fixed inset-0) e ser ativado com animações de entrada fluidas.
>
> Siga estas diretrizes de arquitetura e design:
> 
> 1. **Estrutura Split-Screen (Desktop):**
>    - O contêiner principal do modal deve ser a área de rolagem (overflow-y-auto), suportando instâncias customizadas de scroll suave (ex: Lenis).
>    - **Painel Esquerdo (Informações):** Deve ocupar 35% da largura no desktop. Utilize `fixed`, `left-0`, `top-0` e `h-full` para que permaneça estático enquanto a página rola. Deve conter tipografia elegante (mistura de serif em itálico e sans-serif minúscula com tracking largo), o título do projeto, descrição e o botão de fechar.
>    - **Painel Direito (Imagens):** Deve ocupar 65% da largura e possuir `ml-[35%]` no desktop, contendo as imagens em tamanho generoso. Deve rolar naturalmente conforme o usuário interage.
>    - **Mobile:** O painel esquerdo deve perder o posicionamento fixo, renderizando as imagens logo abaixo das informações, rolando juntos em uma única coluna.
> 
> 2. **Animações (GSAP):**
>    - **Revelação (Curtain Effect):** O modal deve entrar revelando-se de baixo para cima utilizando `clipPath: inset(100% 0 0 0)` para `inset(0 0 0 0)`.
>    - **Imagens:** As imagens principais devem sofrer um leve "zoom in" e desfoque reverso (`blur` para nitidez) durante a entrada.
>    - **Textos:** Os elementos de texto no painel esquerdo devem entrar em cascata (stagger) usando `y: 60, opacity: 0` para `y: 0, opacity: 1`.
> 
> 3. **Lightbox / Galeria Integrada:**
>    - Ao clicar em qualquer imagem do painel direito, um Visualizador em Tela Cheia (Lightbox) deve abrir (z-index superior, fundo preto com 95% de opacidade e backdrop-blur).
>    - A imagem ampliada deve ficar contida na tela (object-contain) com sombra forte (shadow-2xl).
>    - **Atalhos de Teclado:** Implemente navegação entre imagens utilizando as setas direcionais (`ArrowLeft` e `ArrowRight`). A tecla `Escape` deve primeiro fechar o Lightbox (se aberto) e, se já estiver fechado, deve disparar a animação de saída do modal inteiro.
> 
> 4. **Scroll Suave (Lenis):**
>    - Instancie um objeto `Lenis` isolado apenas para o contêiner do modal, garantindo fluidez extra (como se fosse 120Hz). Interrompa a instância global de scroll na montagem do componente e a restaure no fechamento.
> 
> O código gerado deve ser polido, focar intensamente no uso de espaço em branco (padding generoso), tipografia impecável, e animações extremamente suaves (use `ease: 'expo.inOut'` ou `power3.out` no GSAP)."
