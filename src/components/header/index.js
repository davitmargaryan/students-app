import React from "react";
import { withStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { ThemeContext } from "../contexts";
import "../../App.css";

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
      <AppBar position="static">
        <Toolbar>
          <div className="divToolbar">
            <Link to="/home" className="linkNawBar">
              <Button
                size="small"
                variant="contained"
                color="inherit"
                className="buttStyle"
              >
                Home
              </Button>
            </Link>
            <Link to="/students" className="linkNawBar">
              <Button size="small" variant="contained" color="inherit">
                Students
              </Button>
            </Link>
            <Link to="/works" className="linkNawBar">
              <Button size="small" variant="contained" color="inherit">
                Work
              </Button>
            </Link>
          </div>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <ThemeContext.Consumer>
              {({ changeColor }) => {
                return <MenuIcon onClick={changeColor} />;
              }}
            </ThemeContext.Consumer>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
