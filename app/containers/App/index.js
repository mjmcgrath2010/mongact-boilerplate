/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Admin from 'containers/Admin/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login/Loadable';

import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundPage} />
      </Switch>
      <CssBaseline />
    </div>
  );
}
