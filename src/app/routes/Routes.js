import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  dashboard as dashboardRoutes,
  page as authSingInRoutes,
  page as authSingUpRoutes,
} from "./index";


import ScrollToTop from "../custom-components/scroll-to-top";
import DashboardLayout from "../layouts/dashboard";
import AuthLayout from "../layouts/auth";


const ChildRoutes = ({ layout: Layout, routes }) => (
    <Layout>
      <Switch>
        {routes.map((category, index) =>
          category.children ? (
            // Route item with children
            category.children.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact
                component={route.component}
              />
            ))
          ) : (
            // Route item without children
            <Route
              key={index}
              path={category.path}
              exact
              component={category.component}
            />
          )
        )}
      </Switch>
    </Layout>
  );
  
  const Routes = () => (
    <Router>
      <ScrollToTop>
        <Switch>

         {/* SignIn routes */}
        <Route
          path="/"
          exact
          component={() => (
            <ChildRoutes layout={AuthLayout} routes={authSingInRoutes} />
          )}
         />

        {/* SignUp routes */}
        <Route
          path="/auth/*"
          exact
          component={() => (
            <ChildRoutes layout={AuthLayout} routes={authSingUpRoutes} />
        )}
        />

        {/*Settings routes */}
        <Route
          path="/settings/*"
          exact
          component={() => (
            <ChildRoutes layout={DashboardLayout} routes={dashboardRoutes} />
        )}
        />

        {/*All routes */}
        <Route
          path="/*"
          exact
          component={() => (
            <ChildRoutes layout={DashboardLayout} routes={dashboardRoutes} />
        )}
        />
        </Switch>
      </ScrollToTop>
    </Router>
  );
  
  export default Routes;