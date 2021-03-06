# React Webpack Typescript Starter
> Minimal starter with hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (17.x)
* **[Redux](https://redux.js.org/)** (4.x)
* **[React-Redux](https://github.com/reduxjs/react-redux)** (7.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (3.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
* [Babel](http://babeljs.io/) (7.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* [Antd](https://ant.design/)
* [axios](https://github.com/axios/axios)
* [formik](https://github.com/jaredpalmer/formik)
* [yup](https://github.com/jquense/yup)
* [react-intl](https://github.com/formatjs/react-intl)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)
* [antd-scss-theme-plugin](https://github.com/intoli/antd-scss-theme-plugin) - override less styling variables in scss
* [React-router](https://github.com/ReactTraining/react-router)
* [Lodash](https://lodash.com/)
* [momentjs](https://momentjs.com/)
* Production build script
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)
* Code quality (linting) for Typescript.

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run start-dev`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:3000`

**Production**

`yarn run start-prod`

* Build app once (HMR disabled) to `/dist/`
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`yarn run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:3000`
`yarn run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000`
`yarn run build` | Build app to `/dist/`
`yarn run test` | Run tests
`yarn run lint` | Run Typescript linter
`yarn run start` | (alias of `yarn run start-dev`)

**Note**: replace `yarn` with `npm` if you use npm.

## See also
* [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)
* [Isomorphic Webapp Starter](https://github.com/vikpe/isomorphic-webapp-starter)
