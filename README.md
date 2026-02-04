# Manas Portfolio v2

A modern, performant portfolio website built with React, Tailwind CSS, and shadcn/ui components. Fullstack application powered by Cloudflare Workers for API routes, with seamless deployment to Cloudflare Pages.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/MohdManas/Manas-V2-portfolio)

## Features

- **Modern UI**: Built with React 18, Tailwind CSS, and shadcn/ui for accessible, customizable components
- **Fullstack API**: Hono-based API routes in Cloudflare Workers with CORS and error handling
- **Theme Support**: Light/dark mode with persistence
- **Responsive Design**: Mobile-first layout with sidebar navigation
- **State Management**: Tanstack Query for data fetching, Zustand for client state
- **Developer Experience**: Hot reload, TypeScript, ESLint, Vite bundling
- **Performance**: Optimized for edge deployment on Cloudflare
- **Components**: Pre-built shadcn/ui suite (accordion, dialog, sidebar, charts, forms, etc.)

## Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide React icons, Framer Motion
- **Backend**: Cloudflare Workers, Hono, Tanstack Query
- **Utilities**: Zod validation, React Hook Form, Sonner toasts, Immer, UUID
- **Build Tools**: Bun, Wrangler, Vite, PostCSS, Tailwind CSS Animate
- **Deployment**: Cloudflare Pages & Workers

## Quick Start

### Prerequisites

- Bun 1.0+ (`curl -fsSL https://bun.sh/install | bash`)
- Cloudflare account and Wrangler CLI (`bun install -g wrangler`)

### Installation

```bash
git clone <repository-url>
cd manas-portfolio-v2-vrxy4u8anolrcmr1jjgv4
bun install
```

### Development

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or your configured PORT).

API routes are available at `/api/*`.

### Build for Production

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run lint` | Run ESLint |
| `bun run preview` | Preview production build |
| `bun run deploy` | Build and deploy to Cloudflare |
| `bunx wrangler types` | Generate Worker types (alias: `bun run cf-typegen`) |

## Project Structure

```
├── src/              # React app source
│   ├── components/   # UI components (shadcn/ui + custom)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utilities (error reporting, clsx/twMerge)
│   ├── pages/        # Route pages
│   └── main.tsx      # App entrypoint
├── worker/           # Cloudflare Workers API
│   ├── index.ts      # Main Worker (DO NOT EDIT)
│   ├── core-utils.ts # Env types (DO NOT EDIT)
│   └── userRoutes.ts # Add your API routes here
├── tailwind.config.js # Tailwind + shadcn config
├── vite.config.ts    # Vite bundler config
├── wrangler.jsonc    # Cloudflare config
└── package.json      # Dependencies & scripts
```

## Customization

- **Frontend**: Edit `src/pages/HomePage.tsx` and add routes in `src/main.tsx`.
- **API Routes**: Add endpoints in `worker/userRoutes.ts`. Auto-reloads in dev.
- **Sidebar**: Customize `src/components/app-sidebar.tsx`.
- **Theme**: Modify CSS variables in `src/index.css`.
- **Components**: Install new shadcn/ui via `bunx shadcn-ui@latest add <component>`.

## Deployment

Deploy to Cloudflare Pages & Workers:

```bash
bun run deploy
```

Or manually:

1. Login: `wrangler login`
2. Deploy: `wrangler deploy`

Configuration is in `wrangler.jsonc`. Assets are served as SPA with API proxying.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/MohdManas/Manas-V2-portfolio)

## Local Worker Development

Run Worker standalone:

```bash
cd worker
bunx wrangler dev
```

## Environment Variables

Defined in `worker/core-utils.ts`. Extend `Env` interface for custom bindings (KV, D1, R2, DOs).

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)