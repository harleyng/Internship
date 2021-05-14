import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MasterLayout from './layouts/MasterLayout'
import Auth from './components/Auth/Auth'
import Home from './containers/Home'
import ProfileEditor from './components/student/profile/ProfileEditor'
import NewStudent from './components/student/new/NewStudent'
import TopicReview from './components/Lecturer/TopicReview'
import StudentList from './components/student/StudentList'
import ExportContainer from './containers/document/ExportContainer'
import Documents from './containers/document/staffHandle/Documents'

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

          {/* Staff */}
          <Route exact path="/students/" component={StudentList} />
          <Route exact path="/export/:studentID" component={ExportContainer} />
          <Route exact path="/documents" component={Documents} />
        </Switch>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
