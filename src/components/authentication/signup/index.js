import React, { useState } from 'react';
import { Button } from 'react-bootstrap/';
import { Form } from 'react-bootstrap/';
import { Card } from 'react-bootstrap/';
import withStyles from '@material-ui/core/styles/withStyles';
import {ThemeContext} from "../../contexts";
import {isValidEmail, isValidName, isValidPassword} from "../../utils/validator";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

function SignUp(props) {
    const { classes } = props;
    const firstName =  useFormInput('');
    const lastName =  useFormInput('');
    const email = useFormInput('');
    const password =  useFormInput('');
    const confirmPassword = useFormInput('');
    const [firstNameValidationErrors, setFirstNameValidationErrors] = useState([]);
    const [lastNameValidationErrors, setLastNameValidationErrors] = useState([]);
    const [emailValidationErrors, setEmailValidationErrors] = useState([]);
    const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);
    const [confirmPasswordValidationErrors, setConfirmPasswordValidationErrors] = useState([]);

    function isValidSignUpForm() {
        setFirstNameValidationErrors(isValidName(firstName.value));
        setLastNameValidationErrors(isValidName(lastName.value));
        setEmailValidationErrors(isValidEmail(email.value));
        setPasswordValidationErrors(isValidPassword(password.value));
        setConfirmPasswordValidationErrors(isValidPassword(confirmPassword.value));
        if(password.value !== confirmPassword.value){
            setConfirmPasswordValidationErrors([...confirmPasswordValidationErrors, 'Password and confirmPassword do not match']);
        }

        if(!firstNameValidationErrors.length &&
            !lastNameValidationErrors.length &&
            !emailValidationErrors.length &&
            !passwordValidationErrors.length &&
            !confirmPasswordValidationErrors.length){

            return true
        }
    };

    const onSignUpButtonClick = function () {
        if(!isValidSignUpForm()){
            return;
        }
    };

    return  (
        <ThemeContext.Consumer>
            {({ color, changeColor }) => (

                <main className={classes.main}>
                    <Card className={classes.paper}>
                        <p className="h1">
                            Sign up
                        </p>
                        <Form className={classes.form}>
                            <Form.Group margin="normal" required fullWidth>
                                <Form.Label htmlFor="firstName">FirstName</Form.Label>
                                <Form.Control error={!!firstNameValidationErrors.length} {...firstName}  id="firstName" name="firstName" autoFocus />
                                {!!firstNameValidationErrors.length && (
                                    firstNameValidationErrors.map(error => (
                                        <p className="text-warning" key={error}>{error}</p>
                                    ))
                                )}
                            </Form.Group>
                            <Form.Group margin="normal" required fullWidth>
                                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                <Form.Control {...lastName}  id="lastName" name="lastName"/>
                            </Form.Group>
                            <Form.Group margin="normal" required fullWidth>
                                <Form.Label htmlFor="email">Email Address</Form.Label>
                                <Form.Control  {...email}  id="email" name="email"/>
                            </Form.Group>
                            <Form.Group margin="normal" required fullWidth>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control error={!!passwordValidationErrors.length} {...password}   name="password" type="password" id="password" autoComplete="current-password" />
                                {!!passwordValidationErrors.length && (
                                    passwordValidationErrors.map(error => (
                                        <p className="text-warning" key={error}>{error}</p>
                                    ))
                                )}
                            </Form.Group>
                            <Form.Group margin="normal" required fullWidth>
                                <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
                                <Form.Control  {...confirmPassword}  name="confirmPassword" type="password" id="confirmPassword"/>
                            </Form.Group>
                            <Button
                                // type="submit"
                                fullWidth
                                variant={ color }
                                className={classes.submit}
                                onClick={onSignUpButtonClick}
                            >
                                Sign up
                            </Button>
                        </Form>
                    </Card>
                </main>
            )}
        </ThemeContext.Consumer>
    )
}

function useFormInput(initialValue) {

    const [value, setValue] = useState(initialValue);
    function handleChange(e){
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    };
}

export default withStyles(styles)(SignUp);