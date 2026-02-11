# 🌐 Connect Project

O **Connect** é uma aplicação web desenvolvida para facilitar a interação e o gerenciamento de perfis de usuários. O foco principal deste projeto é aplicar conceitos avançados de **componentização**, **roteamento dinâmico** e **estilização modular**, garantindo que a interface seja rápida, responsiva e fácil de manter.

## 🚀 Sobre o Projeto

O propósito deste site é democratizar o acesso ao conhecimento e ao apoio social. Através de uma interface intuitiva e moderna, facilitamos o engajamento de mentores e doadores, além de organizar o calendário de eventos e palestras para a comunidade.

## 🛠️ Stack Tecnológica

As escolhas técnicas para este projeto foram baseadas em escalabilidade e performance:

* **React (v18+):** Biblioteca principal utilizada pela sua eficiência na manipulação do DOM virtual e criação de interfaces declarativas.
* **Vite:** Escolhido como substituto do *Create React App* por ser extremamente leve e oferecer um Hot Module Replacement (HMR) muito mais rápido.
* **SASS (SCSS):** Utilizado para levar o CSS a outro nível. O uso de variáveis, mixins e aninhamento permite um código de estilo muito mais limpo e organizado do que o CSS convencional.
* **CSS Modules:** Para evitar o vazamento de estilos entre componentes. Cada arquivo `.module.scss` garante que a estilização de uma página (como a `User`) não afete as outras.
* **React Router Dom:** A ferramenta padrão para gerenciar a navegação Single Page Application (SPA), permitindo que o usuário mude de página sem que o navegador precise recarregar todo o site.

## 💡 Funcionalidades Implementadas

* **Sistema de Rotas:** Navegação configurada entre a Home e as páginas de Usuário.
* **Estilização Global vs. Modular:** Separação clara entre o que é estilo base (reset, cores principais, fontes) e o que é estilo específico de componente.
* **Design Responsivo:** Focado em se adaptar a diferentes tamanhos de tela.
* **Tratamento de Sombras e Efeitos:** Aplicação de `text-shadow` e `drop-shadow` via SCSS para uma interface mais profunda e moderna.

## 📖 O que aprendi

Durante o desenvolvimento deste projeto, foquei em resolver problemas reais de arquitetura de software, como:

1. Importação correta de módulos de estilo no Sass.
2. Configuração de ambiente do zero com Vite.
3. Gerenciamento de hierarquia de pastas para projetos React profissionais.
