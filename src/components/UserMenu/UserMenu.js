import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);

    return (
        <div className={s.container}>
            <p className={s.greatings} >Welcome, {name}!</p>
            <button className={s.logOutButton} type="button" onClick={() => dispatch(authOperations.logOut())}>
                Log out
            </button>
        </div>
    );
}

export default UserMenu;