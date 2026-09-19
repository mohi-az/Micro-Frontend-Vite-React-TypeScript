# Micro-frontends with Vite

I built this project to get hands-on with module federation: how a host loads separate frontends, who owns navigation, and how they communicate. The bike shop is just the example UI. It is not a finished store.

## The three apps

<<<<<<< HEAD
| App | What it does | Port |
| --- | --- | --- |
| `Online-Shopping-HOST` | React shell, routes, header, and footer | 5000 |
| `Products-Remote` | React product list and detail page | 5001 |
| `Auth-Remote` | Login form built with plain TypeScript | 5002 |
=======
# Technologies Used
Core Project (Host): Vite + React + Vite module federation + Typescript + Tailwind CSS <br/>
Auth Project (Remote): Vite + Typescript + Vite module federation + Tailwind <br/>
Product Project (Remote): Vite + React + Vite module federation + Typescript + Tailwind CSS <br/>
>>>>>>> db0a506ccc401f8cc98d449514b30ad33045da17

The host loads both remotes with `@originjs/vite-plugin-federation`. It shares React with the products remote. I kept routing in the host: when someone selects a product, the remote sends a `CustomEvent` with its ID, and the host navigates to `/products/:id`. That URL works after a refresh too. The auth remote uses plain TypeScript because I wanted to try a remote that does not use React.

## Run it

Use Node.js and npm. From the repository root:

```sh
npm ci --prefix Products-Remote
npm ci --prefix Auth-Remote
npm ci --prefix Online-Shopping-HOST
npm run build
```

Then start each app in its own terminal:

<<<<<<< HEAD
```sh
npm run serve --prefix Products-Remote
npm run serve --prefix Auth-Remote
npm run serve --prefix Online-Shopping-HOST
```
=======
REMOTE: localhost:5001 (Product)
REMOTE: localhost:5002 (Auth)
>>>>>>> db0a506ccc401f8cc98d449514b30ad33045da17

Open <http://localhost:5000>. Try a product, refresh its detail page, and open the login form from the user icon. You can also go straight to <http://localhost:5000/products/1376907>.

The host uses local remote entry URLs by default. For other origins, set `VITE_PRODUCTS_REMOTE_URL` and `VITE_AUTH_REMOTE_URL` when building the host.

## Scope

Product data is stored in [the local catalog](./Products-Remote/src/data/catalog.ts), so the project runs without an API key or backend. Login and cart controls are UI examples; they do not create accounts or orders. Run `npm run lint` to check the two React apps.
