import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MasterLayout from './layouts/MasterLayout'
import Auth from './components/Auth/Auth'
import Home from './containers/Home'
import ProfileEditor from './components/Student/ProfileEditor/ProfileEditor'

const App = () => {
  return (
    <BrowserRouter>
      <MasterLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/user" component={ProfileEditor} />
        </Switch>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
