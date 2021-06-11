import Home from '../pages/Home'
import TopicReview from '../components/lecturer/TopicReview'
import Logbook from '../components/logbook/Logbook'
import Council from '../components/student/evaluation/Council'
import NewStudent from '../components/student/new/NewStudent'
import ProfileEditor from '../components/student/profile/ProfileEditor'
import StudentInternship from '../components/student/StudentInternship'
import StudentOverall from '../components/student/StudentOverall'
import StudentScore from '../components/student/StudentScore'
import ExportContainer from '../pages/document/ExportContainer'
import Documents from '../pages/document/staffHandle/Documents'
import { STUDENTS_PAGE, DOCUMENTS_PAGE } from './constants/pages'

const routes = [
  {
    path: `/`,
    exact: true,
    component: Home,
    protected: true
  },
  // Student
  {
    path: `/${STUDENTS_PAGE}`,
    exact: true,
    component: StudentOverall,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/new`,
    exact: true,
    component: NewStudent,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/topic`,
    exact: true,
    component: TopicReview,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/score`,
    exact: true,
    component: StudentScore,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/internship`,
    exact: true,
    component: StudentInternship,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/:studentID`,
    exact: true,
    component: ProfileEditor,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/:studentID/export`,
    exact: true,
    component: ExportContainer,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/:studentID/logbook`,
    exact: true,
    component: Logbook,
    protected: true
  },
  {
    path: `/${STUDENTS_PAGE}/:studentID/council-evaluation`,
    exact: true,
    component: Council,
    protected: true
  },

  // DOCUMENT
  {
    path: `/${DOCUMENTS_PAGE}`,
    exact: true,
    component: Documents,
    protected: true
  },
]

export default routes;