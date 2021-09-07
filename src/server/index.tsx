import React from 'react';
import helmet from 'helmet';
import express from 'express';
import passport from 'passport';
import axios, { Method } from 'axios';
import cookieParser from 'cookie-parser';
import { StaticRouter } from 'react-router-dom';
import { Helmet, HelmetData } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { API_URL, ENV, PORT } from './config';
import { Provider } from '../frontend/context';
import getInitialData from './utils/getInitialData';
import ServerApp from '../frontend/routes/ServerApp';
import { ContextInterface } from '../frontend/utils/interface/Context';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

const setResponse = (html: string, preloadedState: ContextInterface, helmet: HelmetData, role?: string) => {
  return (
    `<!DOCTYPE html>
    <html lang="es" ${helmet.htmlAttributes?.toString()}>
      <head>
        <base href="/" />
        <meta charset="utf-8" />
        <meta name="theme-color" content="#A7612C" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${helmet.title?.toString()}
        ${helmet.meta?.toString()?.split('/>').join('/>\n\t\t')}
        ${helmet.link?.toString()?.split('/>').join('/>\n\t\t')}
        ${helmet.base?.toString()?.split('/>').join('/>\n\t\t')}
        <link rel='shortcut icon' href='/logo-min-white.svg' type='image/svg' />
        <link rel='apple-touch-icon' href='/logo-min-white.svg' />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="app.css" />
        ${helmet.style?.toString()?.split('</style>').join('</style>\n\t\t')}
        ${helmet.script?.toString()?.split('</script>').join('</script>\n\t\t')}
      </head>
      <body class=${JSON.stringify(preloadedState.theme).replace(/</g, '\\u003c')} ${helmet.bodyAttributes.toString()}>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" id="preloadedState">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <script type="text/javascript" src="app.js"></script>
      </body>
    </html>`
  );
};

const renderApp = async (req: express.Request, res: express.Response) => {
  const { token, theme, language } = req.cookies;
  const initialState: ContextInterface = {
    token,
    dispatch: () => {},
    theme: theme || 'light',
    language: language || 'es',
  };
  try {
    if (token) {
      // await getInitialData(req, initialState);
    } else {
    }
  } catch (error) {
    if (error.response && error.response.data) {
      const { message } = error.response.data;
      if (['jwt expired', 'invalid signature'].includes(message)) {
        res.clearCookie('token', { path: '/' });
      } else {
        initialState.serverError = {
          message,
          code: error.response.data.code,
        };
      }
    } else if (error instanceof Error) {
      initialState.serverError = {
        message: error.message,
      };
    }
  }

  const html = renderToString(
    <Provider initialState={initialState}>
      <StaticRouter location={req.url} context={{}}>
        <ServerApp />
      </StaticRouter>
    </Provider>,
  );

  /* Ensure that this function will only be executed in the server. */
  let helmet: HelmetData;
  if (typeof window === 'undefined') {
    helmet = Helmet.renderStatic();
  }

  res
    .set('Content-Security-Policy', "default-src *; img-src * 'self' blob: data: http://*;  style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    .send(setResponse(html, initialState, helmet, initialState?.user?.role));
};

app.all('/api/*', (req, res) => {
  try {
    return axios({
      url: `${API_URL}${req.originalUrl.split('/api').join('')}`,
      data: req.body,
      method: req.method as Method,
      headers: {
        authorization: req.headers?.authorization || '',
      },
      // headers: req.headers,
    }).then((r) => {
      res.set(r.headers);
      return res.status(r.status).json({
        code: r.status,
        data: r.data.data || r.data,
      });
    }).catch((error) => {
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      } if (error.request) {
        return res.status(500).json({ code: 500, message: error.message });
      }
      return res.status(500).json({ code: 500, message: error.message });
    });
  } catch (error) {
    return res.status(500).json({ code: 500, message: error.message });
  }
});

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
