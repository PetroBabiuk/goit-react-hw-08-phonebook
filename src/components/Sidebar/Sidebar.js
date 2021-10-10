import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css';

const Sidebar = () => (
    <nav className={s.sidebar}>
        <NavLink exact to="/login" className={s.link} activeClassName={s.activeLink}>Login</NavLink>
        <NavLink exact to="/register" className={s.link} activeClassName={s.activeLink}>Register</NavLink>
        <NavLink exact to="/contacts" className={s.link} activeClassName={s.activeLink}>Contacts</NavLink>
    </nav>
);

export default Sidebar;