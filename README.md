# Cratebind React Advanced Starter

## TODO:
- Finish ReadMe
- Add test examples

```
.
├── README.md
├── components
│   ├── AppContext.js
│   ├── ErrorFallback.js
│   ├── GlobalStyle.js
│   ├── Header.js
│   ├── Meta.js
│   ├── Nav.js
│   ├── Page.js
│   └── ProgressBar.js
├── config.js (client-side config file)
├── lib
│   ├── handleError.js
│   ├── initApollo.js
│   ├── utils.js
│   └── withApollo.js
├── next.config.js
├── package.json
├── pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   └── login.js
├── server.js
├── static
│   ├── favicon.ico
│   └── nprogress.css
└── yarn.lock
```

## Project Overview
### `components/`
- `AppContext`: Global context provider, allows for sharing global state between components
- `ErrorFallback`: Fallback UI in case your app hits an error during render
- `GlobalStyle`: Created by styled-components' [createGlobalStyle](https://www.styled-components.com/docs/api#createglobalstyle) API, applies global default CSS styles
- `Header`: Shared "header" component between pages
- `Meta`: Standard metatags for responsiveness, favicons and site title
- `Nav`: Generic navigation bar
- `Page`: Wrapper component for all page components (used in `pages/_app.js`)
- `ProgressBar`: React implementation for [NProgress](http://ricostacruz.com/nprogress/), set to only show after data fetching takes longer than the specified limit

### `lib/`
- `handleError`: Handler for all caught errors, conditionally sends error to rollbar depending on environment
- `initApollo`: Function to start apollo both on server and client side to allow the apollo store to be used in both environments
- `utils`: File with general utility functions, starts with a simple `isProduction` check
- `withApollo`: Apollo higher-order component to pass data from apollo store to our next app pages and components

### `pages/`
- `_app.js`: Mainly used to catch errors and pass queries to components. See [NextJS Docs](https://nextjs.org/docs/#custom-app) for more info
- `_document.js`: Mainly used to combine styles from styled-components. See [NextJS Docs](https://nextjs.org/docs/#custom-document) for more info
- `index.js`: Project root
- `login.js`: Authentication page example
