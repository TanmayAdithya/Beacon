import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ceguhejg4jcu3dt5.us.auth0.com"
    clientId="iQ2o8IbcclDS5Tk7jWZYDuVjWspHl4IK"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
);
