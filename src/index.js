import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';
import { GithubProvider } from './context/context';
//ndscoop.us.auth0.com
//zWT11RTucVqJuPXwfjHJFuaiKe5ha7Ge

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="ndscoop.us.auth0.com"
      clientId="zWT11RTucVqJuPXwfjHJFuaiKe5ha7Ge"
      redirectUri={window.location.origin}
    >

    <GithubProvider>
      <App />
    </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
