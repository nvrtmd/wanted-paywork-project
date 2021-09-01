import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'Styles/GlobalStyle';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'Store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
