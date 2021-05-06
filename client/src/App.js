import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MasterLayout from './layouts/MasterLayout'
import Auth from './components/Auth/Auth'
import Home from './containers/Home'
import ProfileEditor from './components/Student/profile/ProfileEditor'
import NewStudent from './components/Student/new/NewStudent'
import TopicReview from './components/TopicReview'

const App = () => {
  return (
    <BrowserRouter>
      <MasterLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth" component={Auth} />
          
          {/* Student */}
          <Route exact path="/student/:studentID" component={ProfileEditor} />
          <Route exact path="/students/new" component={NewStudent} />

          {/* Lecturer */}
          <Route exact path="/students/topic" component={TopicReview} />
        </Switch>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
