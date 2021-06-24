import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { ItemList } from '../typings/db';
import reducers from './reducers';

let store: any;

function initStore(initialState: { getItemlist?: ItemList | undefined } | undefined) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = (preloadedState: { getItemlist?: ItemList | undefined } | undefined) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: { getItemlist?: ItemList | undefined } | undefined) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
