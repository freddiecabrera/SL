import React from 'react'
import { Route, Router, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'
import Welcome from './components/Welcome'
import Profile from './containers/Profile'

const Routes = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Welcome} />
        <Route path='/profile' component={Profile} />
      </Route>
    </Router>
  </Provider>
)

export default Routes
