import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

// Shows as initial with visible as 'showall'
const persistedState = loadState();

const store = createStore(
  todoApp,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
  });
}, 1000));

console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
