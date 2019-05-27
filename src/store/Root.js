/**
 * @description Global store for state management.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware());

export default (props) => {
  const { children } = props;
  return (
    <Provider store={store}>
      { children }
    </Provider>
  );
};
