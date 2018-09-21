# MyReactBoilerPlate
a React Boilerplate with redux thunk already implemented

to begin, please create the .env file and download the dependencies.

to build the development bundle, use command dev:build
to run the development server, use command dev

to run production bundle, use command prod:build

When you run dev, it's implemented with hot-reload. So if you make changes, it will be automaticaly refreshed.
But if you changed a file on the server side, you will have to rebuild it with dev:build.

This project already implemented with Redux, Thunk, Loading Middleware and React Router.
There's also an example of how to load data from your API in the actions folder.
Components folder will contain React component that is reusable.
Pages folder will contain your page file.

App.js is your root.
client.js is your client side app.
routes.js is where you can define your routing.
server.js is your server side app, you can set your express settings here.
store.js is where you will create the store for your redux.
