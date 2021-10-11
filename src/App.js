import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import './App.css';
import Loader from 'react-loader-spinner';
import { routes } from 'utils/routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const Registration = lazy(() => import('./components/Registration' /* webpackChunkName: "Registration" */));
const Login = lazy(() => import('./components/Login' /* webpackChunkName: "Login" */));
const ContactsView = lazy(() => import('./views/ContactsView' /* webpackChunkName: "ContactsView" */));
const HomeView = lazy(() => import('./views/HomeView' /* webpackChunkName: "HomeView" */));
// const NotFoundPage = lazy(() => import('./views/NotFoundPage' /* webpackChunkName: "NotFoundPage" */ ));

const App = () => {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
      <Sidebar />
      <Switch>
        <Suspense
          fallback={<Loader
            type="ThreeDots"
            color="#3f51b5"
            height={280}
            width={280} />}>
          {/* <Route component={NotFoundPage} /> */}

          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute exact path={routes.register} restricted redirectTo={routes.contacts}>
            <Registration />
          </PublicRoute>
          <PublicRoute exact path={routes.login} restricted redirectTo={routes.contacts}>
            <Login />
          </PublicRoute>
          <PrivateRoute exact path={routes.contacts} redirectTo={routes.login}>
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </>
    )
  );
}

export default (App);