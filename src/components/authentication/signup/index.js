import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import AllCheckForInputs from "./AllCheckForInputs";
import * as PasswordValidator from "password-validator";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function SignUp(props) {
  const { classes } = props;

  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const email = useFormInput("");
  const password = useFormInput("");
  const confirmPassword = useFormInput("");

  const onSignUpButtonClick = function() {
    let isValidPassword = AllCheckForInputs.isValidPassword(password.value);
    let isValidEmail = AllCheckForInputs.isValidEmail(email.value);
    let isValidFirstName = AllCheckForInputs.isValidName(firstName.value);
    let isValidLastName = AllCheckForInputs.isValidName(lastName.value);
    let isValidConfirmPassword =
      password.value === confirmPassword.value ? true : false;

    console.log(" isValidConfirmPassword =", isValidConfirmPassword);
    console.log("isValidPasssword =", isValidPassword);
    console.log("isValidFirstName  =", isValidFirstName);
    console.log("isValidEmail  =", isValidEmail);
    console.log("isValidLastName  =", isValidLastName);
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
            <Input {...firstName} id="firstName" name="firstName" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input {...lastName} id="lastName" name="lastName" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input {...email} id="email" name="email" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              {...password}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input
              {...confirmPassword}
              name="confirmPassword"
              type="password"
              id="confirmPassword"
            />
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
  );
}

function useFormInput(initialValue) {
  console.log("useFormInputs");
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  };
}

export default withStyles(styles)(SignUp);
