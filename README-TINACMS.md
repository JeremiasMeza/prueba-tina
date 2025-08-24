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
# Opción 1: Usando el script personalizado
npm run dev:tina

# Opción 2: Ejecutar TinaCMS manualmente
npx tinacms dev -c "npm run dev"
```

Esto iniciará:
- Astro en `http://localhost:4321`
- TinaCMS admin en `http://localhost:4321/admin`

## URLs importantes

- **Sitio web:** http://localhost:4321
- **Administrador TinaCMS:** http://localhost:4321/admin
- **Redirección admin:** http://localhost:4321/admin (desde `/admin.astro`)

## Configuración

### Variables de entorno

Copia `.env.example` a `.env` y configura las variables si vas a usar Tina Cloud:

```bash
cp .env.example .env
```

### TinaCMS

La configuración de TinaCMS está en `tina/config.ts`. El admin se genera automáticamente en `public/admin/`.

## Scripts disponibles

- `npm run dev` - Solo Astro
- `npm run dev:tina` - Astro + TinaCMS
- `npm run build` - Build de producción de Astro
- `npm run build:tina` - Build de TinaCMS + Astro

## Estructura del proyecto

```
├── public/
│   └── admin/           # Admin de TinaCMS (generado automáticamente)
├── src/
│   ├── content/
│   │   └── posts/       # Posts del blog
│   ├── pages/
│   │   ├── admin.astro  # Redirección al admin
│   │   └── blog/        # Páginas del blog
│   └── layouts/
├── tina/
│   └── config.ts        # Configuración de TinaCMS
└── astro.config.mjs     # Configuración de Astro
```

## Notas importantes

1. TinaCMS requiere que se ejecute su servidor de desarrollo para que funcione el admin.
2. El admin está disponible en `/admin` tanto como archivo estático como redirección.
3. Los posts se almacenan en `src/content/posts/` en formato Markdown.
4. Las imágenes se almacenan en `public/images/`.

## Comandos paso a paso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev:tina
   ```

3. **Acceder al admin:**
   - Abre http://localhost:4321/admin en tu navegador

4. **Para usar solo Astro (sin TinaCMS):**
   ```bash
   npm run dev
   ```

## Troubleshooting

- Si el admin no carga, asegúrate de que TinaCMS esté ejecutándose en el puerto 4001
- Si hay errores de conexión, verifica que ambos servidores (Astro y TinaCMS) estén ejecutándose
- El archivo `public/admin/index.html` debe existir y apuntar al servidor de TinaCMS
