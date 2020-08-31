import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
