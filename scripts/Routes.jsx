import React from 'react'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import Main from './components/Main'
import Welcome from './components/Welcome'

const Routes = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
)

export default Routes
