import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {ThemeContext }from '../../contexts/ThemeContext';
import {isValidPassword} from "../../utils/validator";

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

function SignIn(props) {
    const { classes } = props;
    const email = useFormInput('');
    const password = useFormInput('');
    const [passwordValidationErrors, setPasswordValidationErrors] = useState([]);

    function isValidSignUpForm() {
        setPasswordValidationErrors(isValidPassword(password.value));

        if(!passwordValidationErrors.length ){
            return true
        }
    }
    const onSignInButtonClick = function () {
        isValidSignUpForm();
      const someMethod = function (email, password) {
          //do login
      };
      someMethod(email, password);
    };

    
    return (
        <ThemeContext.Consumer>
          {(theme) => (
           <main className={classes.main} >
            <CssBaseline />
            <Paper className={classes.paper} style = {theme}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input {...email}   id="email" name="email" autoComplete="email" autoFocus />
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={onSignInButtonClick}
                    >
                        Sign in
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
export default withStyles(styles)(SignIn);