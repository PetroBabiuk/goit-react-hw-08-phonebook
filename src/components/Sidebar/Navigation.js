import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";
import s from './Sidebar.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav>
            <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>Main</NavLink>
            {isLoggedIn && <NavLink exact to="/contacts" className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>}
        </nav>
    );
}

export default Navigation;