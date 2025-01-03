# teams-js-reproduction
To reproduce [#2639](https://github.com/OfficeDev/microsoft-teams-library-js/issues/2639):

1. Clone repository
2. Run `yarn` to install dependencies
3. Run `yarn dev` to start development server
4. Observe that this runs without issues
5. Run `yarn build` to create a production build
6. Run `yarn preview` to start a server with the production build
7. Observe `Uncaught ReferenceError: global is not defined` in console
