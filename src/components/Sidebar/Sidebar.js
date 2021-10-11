import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from '../UserMenu';
import AuthNav from './AuthNav';
import  authSelectors from 'redux/auth/auth-selectors';
import s from './Sidebar.module.css';

const Sidebar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header className={s.sidebar}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}

export default Sidebar;




// import { NavLink } from "react-router-dom";
// import s from './Sidebar.module.css';

// const Sidebar = () => (
//     <nav className={s.sidebar}>
        // <NavLink exact to="/login" className={s.link} activeClassName={s.activeLink}>Login</NavLink>
        // <NavLink exact to="/register" className={s.link} activeClassName={s.activeLink}>Register</NavLink>
        // <NavLink exact to="/contacts" className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>
//     </nav>
// );

// export default Sidebar;