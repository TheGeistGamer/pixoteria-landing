# Pixotería — Landing Page

Landing page oficial de **Pixotería**, la lotería mexicana multijugador que
se juega por WiFi local: sin cuentas, sin internet, sin servidores. Este sitio
presenta la app, sus nueve barajas, capturas reales del juego y aloja la
política de privacidad (español e inglés).

## Stack

- [Astro](https://astro.build) — sitio 100% estático (`output: "static"`).
- [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) — adapter para desplegar en Cloudflare Pages/Workers.
- Sin frameworks de UI: HTML + CSS a mano, tipografía pixel-art propia.

## Desarrollo local

```sh
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Build de producción

```sh
npm run build
```

Genera el sitio estático en `./dist/`.

## Desplegar en Cloudflare

```sh
wrangler login
npm run build
wrangler deploy
```

## Estructura

```text
/
├── public/
│   ├── fonts/           # BoldPixels (ver Créditos)
│   └── images/
│       └── cards/       # Arte de cartas usado en la landing
├── src/
│   └── pages/
│       └── index.astro  # Toda la página vive aquí
├── astro.config.mjs
└── wrangler.jsonc
```

## Créditos

- **Tipografía BoldPixels** por [Yūki (@yukipixels)](https://twitter.com/yukipixels),
  licencia [CC BY-SA 4.0](public/fonts/BoldPixels-LICENSE.txt).
- Ilustraciones de cartas: arte original del proyecto Pixotería, más piezas
  generadas con IA (Gemini) para esta landing.

## Licencia

Todos los derechos reservados. Ver [LICENSE](LICENSE).
