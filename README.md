# Astro + TinaCMS Demo

Este proyecto combina Astro con TinaCMS para crear un blog con un sistema de administración de contenido.

## Instalación

```bash
# Instalar dependencias
npm install
# o
pnpm install
```

## Desarrollo

Para ejecutar el proyecto en modo desarrollo con TinaCMS:

```bash
npm run dev
# o
pnpm dev
```

Esto iniciará:
- Astro en `http://localhost:4321`
- TinaCMS admin en `http://localhost:4321/admin`

## URLs importantes

- **Sitio web:** http://localhost:4321
- **Administrador TinaCMS:** http://localhost:4321/admin

## Configuración

### Variables de entorno

Copia `.env.example` a `.env` y configura las variables si vas a usar Tina Cloud:

```bash
cp .env.example .env
```

### TinaCMS

La configuración de TinaCMS está en `tina/config.ts`. El admin se genera automáticamente en `public/admin/`.

## Scripts disponibles

- `npm run dev` - Astro + TinaCMS
- `npm run dev:astro` - Solo Astro
- `npm run build` - Build de TinaCMS + Astro
- `npm run build:astro` - Solo Astro

## Estructura del proyecto

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
