# Hugo Fullstack UI

## Requirements

- Node v18
- pnpm

> Note: if you don't have pnpm, you will need to install it

```bash
npm i -g pnpm
```

## Getting Started

First, run the development server:

```bash
pnpm install
```

By default, the application will run at [http://localhost:3000](http://localhost:3000).

### Routes

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Production

### Build

```bash
pnpm build
```

> Note: you may also export the application as static SPA files


```bash
npx next export
```

### Run

```bash
pnpm start
```
