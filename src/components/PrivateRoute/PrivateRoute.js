import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import authSelectors from "redux/auth/auth-selectors";

const PrivateRoute = ({
    redirectTo,
    children,
    ...routeProps
}) => {
    const isLoggetIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <Route {...routeProps}>
            {isLoggetIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}

export default PrivateRoute;