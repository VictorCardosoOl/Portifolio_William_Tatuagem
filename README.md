<div align="center">
  <img src="https://via.placeholder.com/150" alt="Logo" width="150"/>
  
  # W. Siqueira - Portfolio de Tatuagem
  
  **A arte na pele, eternizada digitalmente.**
  
  Uma experiência web imersiva, elegante e de alta performance desenvolvida para apresentar o trabalho de tatuagem com o máximo de sofisticação e profissionalismo.
  
  [![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)]()
  [![Versão](https://img.shields.io/badge/Versão-1.0.0-blue?style=for-the-badge)]()
  [![Licença](https://img.shields.io/badge/Licença-GPL--3.0-orange?style=for-the-badge)](LICENSE)
  [![Tecnologias](https://img.shields.io/badge/Tech_Stack-Next.js%20%7C%20React%20%7C%20Tailwind%20%7C%20GSAP-black?style=for-the-badge)]()
</div>

<br/>

## 📖 2. Sobre o Projeto

O **W. Siqueira Tattoo Portfolio** foi desenvolvido para resolver o problema de apresentação e profissionalização da arte da tatuagem no ambiente digital. O objetivo principal é proporcionar aos clientes (e potenciais clientes) uma jornada fluida que vai desde a inspiração inicial (galeria de projetos), passando pelo entendimento do processo criativo, até as orientações de cuidados pós-tatuagem (Aftercare).

O público-alvo são clientes que buscam tatuagens exclusivas, autorais e de alta qualidade, e que valorizam uma comunicação clara e um atendimento premium desde o primeiro contato.

Este projeto foi desenhado sob uma ótica de engenharia de software frontend avançada, focando em **experiência de usuário premium**, **performance impecável** e **animações imersivas** que transmitem a mesma precisão e cuidado que o artista tem com suas agulhas.

---

## 💻 3. Demonstração

> **Nota:** Adicione aqui as imagens reais do projeto.

| Home / Hero Section | Galeria (Portfolio) | Seção de Cuidados (Aftercare) |
| :---: | :---: | :---: |
| <img src="https://via.placeholder.com/400x250?text=Hero+Section" alt="Hero" /> | <img src="https://via.placeholder.com/400x250?text=Galeria" alt="Galeria" /> | <img src="https://via.placeholder.com/400x250?text=Aftercare" alt="Aftercare" /> |

**🔗 [Acesse o Projeto Online (Link de Demonstração)](#)**

*Inclua aqui um GIF ou pequeno vídeo demonstrando as animações de scroll.*

---

## ✨ 4. Principais Funcionalidades

O sistema foi arquitetado para guiar o usuário em uma jornada informativa e visual:

| Funcionalidade | Descrição | Diferencial |
| :--- | :--- | :--- |
| **Galeria Imersiva** | Exibição de trabalhos anteriores com suporte a imagens em alta resolução. | Transições suaves e lightbox otimizado. |
| **Smooth Scrolling** | Rolagem de página extremamente suave. | Implementação via Lenis para toque de alta classe. |
| **Microanimações (GSAP)** | Elementos surgindo com fade, parallax e scale durante o scroll. | Traz vida ao site sem comprometer a performance. |
| **Guia de Preparação e Cuidados** | Seções informativas cruciais para o cliente antes e depois da tatuagem. | Reduz dúvidas operacionais e melhora o atendimento. |
| **Chat Widget** | Componente flutuante para contato direto e rápido. | Aumenta a taxa de conversão (agendamentos). |
| **Design Responsivo** | Adaptação perfeita para mobile, tablet e monitores ultrawide. | Layout fluído baseado em tipografia clamp e grid Tailwind. |

---

## 🏗️ 5. Arquitetura do Projeto

O projeto utiliza o **Next.js (App Router)** focado na componentização extrema e separação de responsabilidades.

```text
src/ (ou raiz)
├── app/
│   ├── layout.tsx         # Layout global e injeção de fontes/scripts
│   ├── page.tsx           # Ponto de entrada (renderiza o App)
│   └── globals.css        # Estilos globais e utilitários
├── components/            # Componentes visuais e seções da página
│   ├── About.tsx
│   ├── Hero.tsx
│   ├── Portfolio.tsx
│   ├── Preloader.tsx
│   └── ...
├── context/               # Gerenciamento de estado global
│   └── ScrollContext.tsx  # Controle global de instâncias de scroll
├── hooks/                 # Custom Hooks React
├── types/                 # Definições de tipagem global (TypeScript)
│   └── types.ts
├── public/                # Assets estáticos (imagens, ícones)
├── package.json           # Dependências e scripts
└── tailwind.config.cjs    # Configurações do Design System
```

---

## 🛠️ 6. Tecnologias Utilizadas

| Tecnologia | Finalidade | Versão |
| :--- | :--- | :--- |
| **React** | Biblioteca core para interfaces reativas. | `18.3.1` |
| **Next.js** | Framework React para rotas, otimização e SEO. | `^16.2` |
| **TypeScript** | Tipagem estática para escalabilidade e segurança. | `~5.8` |
| **Tailwind CSS** | Estilização utility-first para desenvolvimento ágil. | `^4.3.0` |
| **GSAP** | Biblioteca premium para animações complexas baseadas em scroll. | `^3.15.0` |
| **Lenis** | Smooth scrolling moderno, leve e performático. | `^1.3.17` |
| **Lucide-React** | Biblioteca de ícones vetoriais consistentes e leves. | `0.263.1` |

---

## 🧠 7. Decisões Técnicas

*   **Next.js ao invés de Vite/CRA:** Escolhido visando futura expansão para páginas dinâmicas, melhoria drástica de **SEO** (Server-Side Rendering quando aplicável) e otimizações nativas de imagens e fontes.
*   **GSAP + Lenis:** A combinação de GSAP (ScrollTrigger) com Lenis entrega a melhor experiência de animação atrelada ao scroll disponível hoje, superior às animações nativas de CSS em termos de controle de timeline.
*   **Tailwind CSS Customizado:** O arquivo `tailwind.config.cjs` foi expandido com um Design System próprio (cores `paper-light`, `ink-black`, tipografia fluida com `clamp()`), garantindo uma identidade visual única e não padronizada de frameworks.
*   **Componentização por Seções:** Cada dobra do site (`Hero.tsx`, `About.tsx`, `Aftercare.tsx`) é um componente isolado. Isso facilita a manutenção, divisão de tarefas e testes independentes.

---

## 🎨 8. Experiência do Usuário (UX)

*   **Acessibilidade (A11y):** Contraste rigoroso (textos escuros em fundo bege/claro, ou tema escuro adaptado) e uso de tags semânticas do HTML5.
*   **Microanimações:** Botões e links possuem interações táteis (hover states, scale). O `Preloader` mascara carregamentos iniciais, entregando o usuário para a interface apenas quando ela está pronta, evitando *FOUC* (Flash of Unstyled Content).
*   **Tipografia Fluida:** Utilização de `clamp` no CSS garante que a leitura seja perfeita em qualquer tela, desde um iPhone até um monitor 4K.

---

## ⚡ 9. Performance

*   **Lazy Loading / Suspense:** Estrutura pronta para suportar carregamento sob demanda.
*   **Otimização de Assets:** Imagens servidas no formato correto e componentes como `ProgressiveImage.tsx` para carregamento suave de fotografias pesadas.
*   **Zero Layout Shift (CLS):** Animações bem estruturadas para não moverem o DOM de forma não prevista.

---

## 🚀 10. Como Executar o Projeto

**Pré-requisitos:** Node.js (v18+) e NPM/Yarn instalados.

1. **Clone o repositório:**
```bash
git clone https://github.com/SeuUsuario/Portifolio_William_Tatuagem.git
```

2. **Acesse o diretório:**
```bash
cd Portifolio_William_Tatuagem
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```
> O projeto estará disponível em `http://localhost:3000`

5. **Para build de produção:**
```bash
npm run build
npm start
```

---

## 🔐 11. Variáveis de Ambiente

Neste estágio, o projeto se apoia em dados estáticos, não exigindo variáveis de ambiente complexas. 

| Variável | Descrição |
| :--- | :--- |
| `NEXT_PUBLIC_API_URL` | *(Futuro)* URL base para chamadas de API (se implementado backend). |

---

## 🗺️ 12. Roadmap

- [ ] Melhorar a nota de acessibilidade no Lighthouse para 100.
- [ ] Implementar sistema de agendamento automático ou formulário interativo no ChatWidget.
- [ ] Adicionar internacionalização (i18n) para clientes estrangeiros (PT-BR e EN).
- [ ] Implementar testes unitários (Jest/Testing Library) nos componentes core.
- [ ] Otimizar Next/Image em todos os componentes de imagem.

---

## 💎 13. Qualidade do Código

A arquitetura atual se destaca pela forte aderência a **Boas Práticas**:
*   **DRY (Don't Repeat Yourself):** Reuso massivo de lógica através de Contexto (`ScrollContext`).
*   **Tipagem Forte:** TypeScript presente garantindo previsibilidade de dados (`types.ts`).
*   **Separação de Preocupações:** Animações concentradas no escopo de cada componente e lógica global separada em Context.

---

## 🎓 14. Aprendizados

O maior desafio técnico foi conciliar a engine de renderização do **Next.js (App Router)** com a manipulação imperativa de DOM exigida pelo **GSAP e Lenis**. 
A solução foi implementar adequadamente os hooks `useLayoutEffect` / `useEffect` dentro de componentes marcados como `"use client"`, além de utilizar o `gsap.context()` para garantir uma correta limpeza de memória no *unmount* (evitando *memory leaks*).

---

## 🧑‍💻 15. Autor

**[Seu Nome / William Siqueira]**
*Desenvolvedor Frontend / Engenheiro de Software*

Apaixonado por criar interfaces que unem beleza, acessibilidade e performance.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seuperfil)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seuperfil)
[![Portfólio](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://seusite.com)

---

## 🤝 16. Contribuição

Contribuições são muito bem-vindas! Se você tem alguma ideia para melhorar este projeto, siga os passos:

1. Faça um **Fork** do projeto.
2. Crie uma **Branch** para sua feature (`git checkout -b feature/MinhaNovaFeature`).
3. Faça o **Commit** de suas alterações (`git commit -m 'Add: Minha nova feature'`).
4. Faça o **Push** para a branch (`git push origin feature/MinhaNovaFeature`).
5. Abra um **Pull Request**.

---

## 📄 17. Licença

Este projeto está licenciado sob a **GNU General Public License v3.0 (GPL-3.0)**.
Você pode utilizar, modificar e distribuir este software desde que qualquer trabalho derivado também seja distribuído sob a mesma licença.

Para mais informações consulte o arquivo [LICENSE](LICENSE).
