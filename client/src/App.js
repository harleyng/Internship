import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import routes from './setting/routes'
import MasterLayout from './layouts/MasterLayout'
import AuthLayout from './layouts/AuthLayout'
import Auth from './components/auth/Auth'
import NotFound from './pages/NotFound'
import { DOCUMENTS_PAGE, STUDENTS_PAGE } from './setting/constants/pages'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exat path="/auth">
          <Route exact path="/auth" component={Auth} />
        </Route>
        <Route exact path={[`/${STUDENTS_PAGE}/:path?/:path?`, `/${DOCUMENTS_PAGE}/:path?/:path?`, '/']}>
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
