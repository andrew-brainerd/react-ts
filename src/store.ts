import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const configureStore = (): Store =>
  createStore(
    reducers,
    composeWithDevTools(applyMiddleware(
      sagaMiddleware
    ))
  );

export default configureStore;
