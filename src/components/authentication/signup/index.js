import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {ThemeContext }from '../../contexts/ThemeContext'
import {isValidEmail, isValidName, isValidPassword} from "../../utils/validator";
import FireManager from '../../../firebase/FireManager'



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
        const firstNameErrors = isValidName(firstName.value);
        setFirstNameValidationErrors(firstNameErrors);

        const lastNameErrors = isValidName(lastName.value);
        setLastNameValidationErrors(lastNameErrors);

        const emailErrors = isValidEmail(email.value);
        setEmailValidationErrors(emailErrors);

        const passwordErrors = isValidPassword(password.value);
        setPasswordValidationErrors(passwordErrors);

        const confirmPasswordErrors = isValidPassword(confirmPassword.value);
        if(password.value !== confirmPassword.value){
            confirmPasswordErrors.push('Password and confirmPassword do not match');
        }
        setConfirmPasswordValidationErrors(confirmPasswordErrors);

        if(!firstNameErrors.length &&
            !lastNameErrors.length &&
            !emailErrors.length &&
            !passwordErrors.length &&
            !confirmPasswordErrors.length){
            return true
        }
    };

    const onSignUpButtonClick = function () {
        debugger;
        if(!isValidSignUpForm()){
            return;
        }
        debugger;
        FireManager.createUserInFirebase(email.value, password.value, firstName.value, lastName.value);
    };
    
   return  (
        <ThemeContext.Consumer>
          {(theme) => (
            <main className={classes.main} style = {theme}  >
            <CssBaseline />
            <Paper className={classes.paper} style = {theme} >
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="firstName">FirstName</InputLabel>
                        <Input error={!!firstNameValidationErrors.length} {...firstName}  id="firstName" name="firstName" autoFocus />
                        {!!firstNameValidationErrors.length && (
                            firstNameValidationErrors.map(error => (
                                <Typography color="error" key={error}>{error}</Typography>
                            ))
                        )}
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input error={!!lastNameValidationErrors.length} {...lastName}  id="lastName" name="lastName"/>
                        {!!lastNameValidationErrors.length && (
                            lastNameValidationErrors.map(error => (
                                <Typography color="error" key={error}>{error}</Typography>
                            ))
                        )}
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input  error={!!emailValidationErrors.length} {...email}  id="email" name="email"/>
                        {!!emailValidationErrors.length && (
                            emailValidationErrors.map(error => (
                                <Typography color="error" key={error}>{error}</Typography>
                            ))
                        )}
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input error={!!passwordValidationErrors.length} {...password}   name="password" type="password" id="password" autoComplete="current-password" />
                        {!!passwordValidationErrors.length && (
                            passwordValidationErrors.map(error => (
                                <Typography color="error" key={error}>{error}</Typography>
                            ))
                        )}
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                        <Input  error={!!confirmPasswordValidationErrors.length} {...confirmPassword}  name="confirmPassword" type="password" id="confirmPassword"/>
                        {!!confirmPasswordValidationErrors.length && (
                            confirmPasswordValidationErrors.map(error => (
                                <Typography color="error" key={error}>{error}</Typography>
                            ))
                        )}
                    </FormControl>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSignUpButtonClick}
                    >
                        Sign up
                    </Button>
                </form>
            </Paper>
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