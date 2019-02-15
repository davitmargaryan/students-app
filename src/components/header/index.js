import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { ThemeContext } from "../contexts";
import "../../App.css";
import Switches from "../buttons";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar }  from 'react-bootstrap/';
import { Nav }  from 'react-bootstrap/';
import { FormControl }  from 'react-bootstrap/';
import { Form }  from 'react-bootstrap/'




const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Header(props) {
  const { classes } = props;
  return (

    <div className={classes.root}>
        <ThemeContext.Consumer>
            {({ color, changeColor }) => {
        return <Navbar bg={ color } variant="dark">
            <Navbar.Brand href="/home">Student-App</Navbar.Brand>
            <Nav className="mr-auto">
                <Toolbar>
                   <Nav.Link> <Link to="/home" activeClassName="active">
                       <Button variant="contained" color={ color } className={classes.button}>
                           Home
                       </Button>
                    </Link>
                   </Nav.Link>
                    <Nav.Link> <Link to="/students" activeClassName="active">
                        <Button variant="contained" color={ color } className={classes.button}>
                            Students
                        </Button>
                    </Link>
                    </Nav.Link>
                    <Nav.Link> <Link to="/works" activeClassName="active">
                        <Button variant="contained" color={ color } className={classes.button}>
                            Works
                        </Button>
                    </Link>
                    </Nav.Link>
                    <Typography variant="h6" color="inherit" className={classes.grow} />
                    <Nav.Link> <Link to="/login" activeClassName="active">
                        <Button variant="contained" color={ color } className={classes.button}>
                            Login
                        </Button>
                    </Link>
                    </Nav.Link>
                </Toolbar>
            </Nav>

                    Change Theme <Switches onClick={changeColor} />

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
            }}
        </ThemeContext.Consumer>
    </div>
  );
}

export default withStyles(styles)(Header);
