# template-react-vite

Template base para projetos front-end React + Vite.

## Stack incluída

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [React Router](https://reactrouter.com/) (`react-router-dom`) já configurado com layout e rota 404
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss` (sem `tailwind.config.js`; tema definido em `src/index.css` com `@theme`)
- [lucide-react](https://lucide.dev/) para ícones
- ESLint (flat config) com `typescript-eslint`, `eslint-plugin-react-hooks` e `eslint-plugin-react-refresh`
- `src/services/api.ts`: client HTTP mínimo (fetch) com suporte a token Bearer, pronto para apontar para uma API .NET (`VITE_API_URL`)

## Como criar um projeto novo

**Via CLI (recomendado):**

```
npm create gentilpedro-react@latest minha-app
cd minha-app
npm install
npm run dev
```

**Via GitHub template repo:**

1. Use este repositório como template no GitHub ("Use this template") ou clone.
2. Renomeie o campo `name` em `package.json`.
3. Copie `.env.example` para `.env` e ajuste `VITE_API_URL`.
4. `npm install`
5. `npm run dev` (abre em `http://localhost:3000`)

O pacote `create-gentilpedro-react` (pasta `create-app/`) é publicado a partir deste mesmo repositório — sempre que a `main` muda, o CI sincroniza o template e publica uma versão nova no npm.

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção (`tsc -b && vite build`)
- `npm run lint` — ESLint
- `npm run preview` — preview do build

## Estrutura

```
src/
  components/   # componentes reutilizáveis (ex: Layout)
  pages/        # páginas/rotas
  services/     # clients de API e afins
  App.tsx       # definição de rotas
  main.tsx      # bootstrap
  index.css     # import do Tailwind + tema (@theme)
```

## Libs extras (adicionar conforme o projeto pedir)

Este template fica propositalmente enxuto. Dependendo do projeto, considere adicionar:

- **Formulários**: `react-hook-form` + `@hookform/resolvers` + `zod`
- **Estado global**: `zustand`
- **Componentes de UI prontos**: `flowbite-react`
- **Notificações/toasts**: `sonner`
- **JWT no client**: `jwt-decode`
- **Gráficos**: `victory`
