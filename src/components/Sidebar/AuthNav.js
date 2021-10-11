import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css';

const AuthNav = () => (
    <div>
        <NavLink exact to="/register" className={s.link} activeClassName={s.activeLink}>Register</NavLink>
        <NavLink exact to="/login" className={s.link} activeClassName={s.activeLink}>Login</NavLink>
    </div>
);

export default AuthNav;