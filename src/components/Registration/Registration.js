import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from 'formik';
import { Link } from "react-router-dom";
import { routes } from "utils/routes";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import s from './Registration.module.css';
import  authOperations  from "redux/auth/auth-operations";
/** 
 * NOTE: initial values in registration form
    values = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }
*/

const INITIAL_VALUES = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};
 
const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();

    const validate = useCallback(values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length < 3) {
            errors.name = 'Invalid name. Name should have at least 3 symbols';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8 || values.password.length > 16) {
            errors.password = 'Invalid password. Password should be greater then 8 symbols and less then 16 symbols';
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Required';
        } else if (values.confirmPassword.length < 8 || values.confirmPassword.length > 16) {
            errors.confirmPassword = 'Invalid password. Password should be greater then 8 symbols and less then 16 symbols';
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = 'Confirm password should be equal to password';
        }

        return errors;
    }, []);

    const handleSubmit = useCallback((values, { setSubmitting }) => {
        dispatch(authOperations.register({name: values.name, email: values.email, password: values.password}));
        setSubmitting(false);
    }, [dispatch]);

    const togglePassword = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    const toggleConfirmPassword = useCallback(() => {
        setShowConfirmPassword(prev => !prev);
    }, []);

    return (
        <>
            <h1 className="text">Sing up form</h1>
            <div className={s.loginWindow}>
                <Formik
                    initialValues={INITIAL_VALUES}
                    validate={validate}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        isSubmitting,
                    }) => (
                        <form className={s.form} onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                id="name"
                                name="name"
                                label="Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                id="email"
                                name="email"
                                label="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <div className={s.passwordField}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    margin="normal"
                                    helperText={touched.password && errors.password}
                                />
                                <div className={s.passwordIconButton}>
                                    <IconButton
                                        aria-label="visibility"
                                        onClick={togglePassword}
                                        disabled={!values.password}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </div>
                            </div>
                            <div className={s.passwordField}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                    margin="normal"
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                />
                                <div className={s.passwordIconButton}>
                                    <IconButton
                                        aria-label="visibility"
                                        onClick={toggleConfirmPassword}
                                        disabled={!values.confirmPassword}>
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </div>
                            </div>
                            <div className={s.confirmButton}>
                                <Button color="primary" variant="contained" type="submit" disabled={isSubmitting ||
                                    !(Object.keys(touched).length === Object.keys(INITIAL_VALUES).length
                                        && Object.keys(errors).length === 0)}>
                                    Sign up
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
                <p>Do you already have an account? Go to <Link to={routes.login}>LOGIN!</Link></p>
            </div>
        </>
    );
 }
 
export default Registration;