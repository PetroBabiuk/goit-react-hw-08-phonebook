import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import authSelectors from "redux/auth/auth-selectors";

const PublicRoute = ({
    redirectTo,
    children,
    ...routeProps
}) => {
    const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);
    const shouldRedirect = isLoggetIn && routeProps.restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={redirectTo} /> : children}
        </Route>
    );
}

export default PublicRoute;