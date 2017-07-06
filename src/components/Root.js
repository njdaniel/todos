/**
 * Created by nicholas on 7/6/17.
 */
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { Router, Route, browserHistory } from 'react-router';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
