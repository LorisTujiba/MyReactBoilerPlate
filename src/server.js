import express from 'express';
import React from 'react';
import serialize from "serialize-javascript";
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import compression from 'compression';
import { Helmet } from 'react-helmet';

import routes from './routes.js';
import App from './App';
import store from './store.js';
require('dotenv').config()

const server = express();
const isDevelopment = process.env.NODE_ENV != "production";
let script_path = "";
let port = "";
server.use(express.static("public"));

console.log("Environtment value :", process.env.NODE_ENV,"; isDevelopment :",isDevelopment);

if(isDevelopment){
  /*HMR Setup*/
  var config = require('../webpack.client.config');
  port = process.env.PORT;
  const compiler = webpack(config)
  server.use(webpackDevMiddleware(compiler, {
    publicPath: 'http://localhost:'+port+'/scripts/',
    stats: {colors: true}
  }));
  server.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
  script_path = "http://localhost:"+port+"/scripts/bundle.js";
  /*End of HMR Setup*/
} else{
  //Production Build
  server.use(compression())
  script_path = "/bundle.js"
  port = 3002;
}

server.get('*', (req, res, next) => {
  const activeRoute = routes.find((route)=>matchPath(req.url,route)) || {};
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <App/>
        </StaticRouter>
      </Provider>
  ))
  const preloadedState = store.getState()
  const styles = sheet.getStyleTags();
  //const title = 'Server side Rendering with Styled Components';
  const title='';

  const helmet = Helmet.renderStatic();
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <meta charset="UTF-8"/>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${styles}
          <style>
            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }
            /* Track */
            ::-webkit-scrollbar-track {
              background: #222;
            }
            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #ffa687;
            }
            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #dd396b;
            }
          </style>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Lato" rel="stylesheet"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"/>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script src="${script_path}" defer></script>
        </head>
        <body style="margin:0">
          <div id="app">
            ${body}
          </div>
        </body>
      </html>
    `
  );
});

server.listen(
  port, ()=>{
    console.log(`-----------------------------------------------\n| NOTICE\n-----------------------------------------------\n| Serving at http://localhost:${port}\n| Now watching for changes\n-----------------------------------------------`)
  }
);
