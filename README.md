# Electron with Typescript application | SSR & API Routes Support!

This example show how you can use Next.js inside an Electron application to avoid a lot of configuration, use Next.js router as view and use server-render to speed up the initial render of the application. Both Next.js and Electron layers are written in TypeScript and compiled to JavaScript during the build process.

| Part       | Source code (Typescript) | Builds (JavaScript) |
| ---------- | ------------------------ | ------------------- |
| Next.js    | `/renderer`              | `/renderer`         |
| Electron   | `/main`                  | `/main`             |
| Production |                          | `/dist`             |

## How to use

```bash
"dev": Dev mode on Browser (nextjs standard dev mode)
"build": Build nextjs app (nextjs standard build)
"start": Start server with built app (nextjs standard start)
"dev:desktop": Same as 'dev' but in electron app
"build:desktop": Same as 'build' but in electron app
"dist": Build and Generate production app
"postinstall": Install some dependencies of electron builder
"clean": Clean build dirs
"build:main": Build typescript code of electron
"build:renderer": "next build renderer",
"build:electron": "npm run build:renderer && npm run build:main",
"lint": "next lint renderer"
```

## Notes

You can create the production app using `npm run dist`.

_note regarding types:_

- Electron provides its own type definitions, so you don't need @types/electron installed!
  source: https://www.npmjs.com/package/@types/electron
