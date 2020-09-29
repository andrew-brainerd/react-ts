import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
      sagaMiddleware
    ))
  );

export default configureStore;
