import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './setting/routes'
import MasterLayout from './layouts/MasterLayout'
import AuthLayout from './layouts/AuthLayout'
import Auth from './components/auth/Auth'
import NotFound from './pages/NotFound'
import { DOCUMENTS_PAGE, OPPORTUNITIES_PAGE, STUDENTS_PAGE } from './setting/constants/pages'
import NewStudent from './components/student/new/NewStudent'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/auth">
          <Route exact path="/auth" component={Auth} />
        </Route>
        <Route exact path={`/${STUDENTS_PAGE}/new`}>
          <Route exact path={`/${STUDENTS_PAGE}/new`} component={NewStudent} /> 
        </Route>
        <Route exact path={[`/${STUDENTS_PAGE}/:path?/:path?`, `/${DOCUMENTS_PAGE}/:path?/:path?`, `/${OPPORTUNITIES_PAGE}/:path?/:path?`, '/']}>
          <MasterLayout>
            <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(routeProps) => {
                  if (route.protected)
                    return (
                      <AuthLayout>
                        <route.component {...routeProps} />
                      </AuthLayout>
                    );

                  return (
                    <route.component {...routeProps} />
                  )
                }}
              />
            ))}
            </Switch>
          </MasterLayout>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
