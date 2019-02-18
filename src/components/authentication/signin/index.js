import React, { useState } from 'react';
import { Button } from 'react-bootstrap/';
import { Form } from 'react-bootstrap/';
import { Card } from 'react-bootstrap/';
import withStyles from '@material-ui/core/styles/withStyles';
import {ThemeContext} from "../../contexts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'


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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange=function (e) {
        setEmail(e.target.value)
    };

    const handlePasswordChange=function (e) {
        setPassword(e.target.value)
    };

    const onSignInButtonClick = function () {
        const someMethod = function (email, password) {
            //do login
        };
        someMethod(email, password);
    };

    return (
        <main className={classes.main}>
            <Card className={classes.paper}>
                <ThemeContext.Consumer>
                    {({ color, changeColor }) => {
                    let bgcolr = ( color === "primary" ) ? "#3084f6" : "#6d757c";
                    let iconcolr = ( color === "primary" ) ? "#6d757c" : "#3084f6" ;
                    return    <FontAwesomeIcon icon='user-graduate' color={ iconcolr } size="4x"  style={{ backgroundColor: bgcolr }}/>
                        }}
                </ThemeContext.Consumer>
                <p className="h1">
                    Sign in
                </p>
                <Form >
                    <Form.Group margin="normal" required fullWidth>
                        <Form.Label htmlFor="email">Email Address</Form.Label>
                        <Form.Control value={email} placeholder="Enter email" onChange={handleEmailChange} id="email" name="email" autoComplete="email" autoFocus />
                    </Form.Group>
                    <Form.Group margin="normal" required fullWidth>
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control value={password} placeholder="Enter password" onChange={handlePasswordChange} name="password" type="password" id="password" autoComplete="current-password" />
                    </Form.Group>
                    <ThemeContext.Consumer>
                        {({ color, changeColor }) => (

                    <Button
                        type="submit"
                        fullWidth
                        variant={ color }
                        className={classes.submit}
                        onClick={onSignInButtonClick}
                    >
                        Sign in
                    </Button> )}
                    </ThemeContext.Consumer>
                </Form>
            </Card>
        </main>
    );
}
library.add(faUserGraduate);
export default withStyles(styles)(SignIn);