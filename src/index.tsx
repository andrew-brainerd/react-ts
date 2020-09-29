import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { sagaMiddleware } from './store';
import { imageWatcher } from './sagas';
import App from './components/App/App';
import './index.css';

const store = configureStore();

sagaMiddleware.run(imageWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
