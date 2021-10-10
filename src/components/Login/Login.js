import React, { useState, useCallback } from "react";
import { Formik } from 'formik';
import { Link } from "react-router-dom";
import { routes } from "utils/routes";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import s from './Login.module.css';

/** 
 * NOTE: initial values in registration form
    values = {
        email: '',
        password: '',
    }
*/

const INITIAL_VALUES = {
    email: '',
    password: '',
};
 
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const validate = useCallback(values => {
        const errors = {};
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
        return errors;
    }, []);

    const handleSubmit = useCallback((values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
    }, []);

    const togglePassword = useCallback(() => {
        setShowPassword(prev => !prev);
    }, []);

    return (
        <>
            <h1 className="text">Sing in form</h1>
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
                                id="email"
                                name="email"
                                label="Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                margin="normal"
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
                            <div className={s.confirmButton}>
                                <Button color="primary" variant="contained" type="submit" disabled={isSubmitting ||
                                    !(Object.keys(touched).length === Object.keys(INITIAL_VALUES).length
                                        && Object.keys(errors).length === 0)}>
                                    Sign in
                                </Button>
                            </div>
                        </form>
                    )}
                </Formik>
                <p>Does not have an account yet? Go to <Link to={routes.register}>REGISTER!</Link></p>
            </div>
        </>
    );
 }
 
export default Login;