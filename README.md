# Frink-Wallet

This is the Frink's Wallet project, based on [Svelte](https://svelte.dev) and Routify, and compiled with Rollup.

## Getting started

Clone the repo locally and follow the next steps to run the project:

```
cd Frink-Wallet
npm install
npm run dev
```

## Npm scripts

| Syntax        | Description                                                               |
| ------------- | ------------------------------------------------------------------------- |
| `dev`         | Development (port 5000)                                                   |
| `dev-dynamic` | Development with dynamic imports                                          |
| `build`       | Build a bundled app with SSR + prerendering and dynamic imports           |
| `serve`       | Run after a build to preview. Serves SPA on 5000 and SSR on 5005          |
| `deploy:*`    | Deploy to netlify or now                                                  |
| `export`      | Create static pages from content in dist folder (used by `npm run build`) |

## SSR and pre-rendering

SSR and pre-rendering are included in the default build process.

`npm run deploy:netlify` will deploy the app with SSR and prerendering included.

To render async data, call the `$ready()` helper whenever your data is ready.

If \$ready() is present, rendering will be delayed till the function has been called.

Otherwise it will be rendered instantly.

## Use of VSCode as IDE

If you use VSCode, here are some great extensions you should use:

https://marketplace.visualstudio.com/items?itemName=JamesBirtles.svelte-vscode

https://marketplace.visualstudio.com/items?itemName=fivethree.vscode-svelte-snippets

https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense

We work with **Eslint** and **Prettier**. In the Settings make sure that for
JavaScript files, format on save is disable. The **eslint-plugin-prettier**
package will format the code for you. Regarding the `.svelte` files, these
follow the rules marked on the **.prettierrc** config file.
