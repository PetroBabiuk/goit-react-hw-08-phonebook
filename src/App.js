import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import './App.css';
import { routes } from 'utils/routes';

const Registration = lazy(() => import('./components/Registration' /* webpackChunkName: "Registration" */));
const Login = lazy(() => import('./components/Login' /* webpackChunkName: "Login" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "ContactsView" */));
const NotFoundPage = lazy(() => import('./views/NotFoundPage' /* webpackChunkName: "NotFoundPage" */ ));

const App = () => {

  return (
    <>
      <Sidebar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={routes.contacts} exact component={ContactsView} />
          <Route path={routes.login} exact component={Login} />
          <Route path={routes.register} exact component={Registration} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default (App);