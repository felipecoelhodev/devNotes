# DevNotes 

O **DevNotes** é um aplicativo de gerenciamento de notas focado em simplicidade e eficiência. Desenvolvido com as tecnologias mais modernas do ecossistema React, ele permite que você organize suas ideias por categorias, realize buscas rápidas e mantenha tudo salvo.

## Funcionalidades

-   **Gerenciamento de Notas**: Crie, visualize e exclua notas facilmente.
-   **Categorização Dinâmica**: Crie categorias personalizadas para agrupar suas ideias (ex: Trabalho, Pessoal, Estudos).
-   **Busca em Tempo Real**: Filtre notas por título ou conteúdo enquanto digita.
-   **Filtros e Ordenação**: Organize suas notas por data (recentes/antigas), ordem alfabética ou por categorias específicas.
-   **Persistência Local**: Suas notas e categorias ficam salvas no `localStorage` do seu navegador.
-   **Interface Moderna**: Design dark mode elegante, responsivo e construído com Tailwind CSS.
-   **PWA Ready**: Configurado com manifest para ser instalado como um aplicativo.

## Tecnologias Utilizadas

-   [React 19](https://react.dev/) - Biblioteca para interfaces de usuário.
-   [Vite](https://vitejs.dev/) - Build tool ultra-rápida.
-   [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS utilitário.
-   [Context API](https://react.dev/learn/passing-data-deeply-with-context) - Gerenciamento de estado global.
-   [SVGR](https://react-svgr.com/) - Transformação de SVGs em componentes React.

## Como rodar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/devnotes.git
    cd devnotes
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O app abrirá automaticamente em `http://localhost:3000`.

## Estrutura de Arquivos

-   `src/components`: Componentes reutilizáveis (Card, Lista, Formulário).
-   `src/contexts`: Gerenciamento de estado (Notas e Categorias).
-   `src/assets`: Estilos globais e imagens/ícones.
-   `public/`: Manifesto e ícones estáticos do app.

---
Desenvolvido por felipecoelhodev - https://www.linkedin.com/in/felipe-coêlho/
