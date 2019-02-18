import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleFirstNameChange=function (e) {
        setFirstName(e.target.value)
    };

    const handleLastNameChange=function (e) {
        setLastName(e.target.value)
    };

    const handleEmailChange=function (e) {
        setEmail(e.target.value)
    };

    const handlePasswordChange=function (e) {
        setPassword(e.target.value)
    };

    const handleConfirmPasswordChange=function (e) {
        setConfirmPassword(e.target.value)
    };

    const onSignUpButtonClick = function () {
        const someMethod = function (email, password) {
            //do login
        };
        someMethod(email, password);
    };

    return (
        <main className={classes.main}>
            <CssBaseline />
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="firstName">FirstName</InputLabel>
                        <Input value={firstName} onChange={handleFirstNameChange} id="firstName" name="firstName" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Input value={lastName} onChange={handleLastNameChange} id="lastName" name="lastName"/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input value={email} onChange={handleEmailChange} id="email" name="email"/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input value={password} onChange={handlePasswordChange} name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                        <Input value={confirmPassword} onChange={handleConfirmPasswordChange} name="confirmPassword" type="password" id="confirmPassword"/>
                    </FormControl>
                    <Button
                        type="submit"
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
    );
}

export default withStyles(styles)(SignUp);