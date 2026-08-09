# create-gentilpedro-react

Scaffold de um novo projeto React + Vite + TypeScript + Tailwind CSS v4, com a stack e a estrutura de pastas que o [Gentil Pedro](https://github.com/gentilpedro) usa nos próprios projetos.

## Uso

```
npm create gentilpedro-react@latest minha-app
cd minha-app
npm install
npm run dev
```

## O que vem incluído

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [React Router](https://reactrouter.com/) (`react-router-dom`) já configurado com layout e rota 404
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss` (sem `tailwind.config.js`; tema definido em `src/index.css` com `@theme`)
- [lucide-react](https://lucide.dev/) para ícones
- ESLint (flat config) com `typescript-eslint`, `eslint-plugin-react-hooks` e `eslint-plugin-react-refresh`
- `src/services/api.ts`: client HTTP mínimo (fetch) com suporte a token Bearer, pronto para apontar para uma API .NET (`VITE_API_URL`)

## Código-fonte

Este pacote é publicado automaticamente a partir do template em [gentilpedro/template-react-vite](https://github.com/gentilpedro/template-react-vite) — o mesmo repositório também pode ser usado direto como GitHub template ("Use this template"), sem passar pelo CLI.

## Licença

MIT
