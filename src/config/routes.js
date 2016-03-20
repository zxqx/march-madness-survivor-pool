import React from 'react';
import { Route } from 'react-router';
import App from '../containers/App';
import PickResultsPage from '../containers/PickResultsPage';
import AnotherPage from '../containers/AnotherPage';
import NotFoundPage from '../containers/NotFoundPage';

export default (
  <Route component={App}>
    <Route path="/" component={PickResultsPage} />
    <Route path="/another" component={AnotherPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
