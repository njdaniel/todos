/**
 * Created by nicholas on 7/6/17.
 */
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import todoApp from './reducers';

const configureStore = () => {
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

  return store;
};

export default configureStore;
