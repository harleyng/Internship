import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MasterLayout from './layouts/MasterLayout'
import Auth from './components/auth/Auth'
import Home from './containers/Home'
import ProfileEditor from './components/student/profile/ProfileEditor'
import NewStudent from './components/student/new/NewStudent'
import TopicReview from './components/lecturer/TopicReview'
import StudentList from './components/student/StudentList'
import ExportContainer from './containers/document/ExportContainer'
import Documents from './containers/document/staffHandle/Documents'
import StudentInternship from './components/student/StudentInternship'
import Council from './components/student/evaluation/Council'
import Supervisor from './components/student/evaluation/Supervisor'
import Kanban from './components/logbook/kanban/Kanban'

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
          <Route exact path="/kanban" component={Kanban} />

          {/* Lecturer */}
          <Route exact path="/students/topic" component={TopicReview} />

          {/* Staff */}
          <Route exact path="/students/" component={StudentList} />
          <Route exact path="/export/:studentID" component={ExportContainer} />
          <Route exact path="/documents" component={Documents} />

          {/* Council */}
          <Route exact path="/students/internship" component={StudentInternship} />
          <Route exact path="/student/evaluate/council/:studentID" component={Council} />

          {/* Supervisor */}
          <Route exact path="/student/evaluate/supervisor/:studentID" component={Supervisor} />
        </Switch>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
