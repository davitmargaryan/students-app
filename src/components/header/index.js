import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
// import { BrowserRouter as Router, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/SettingsBrightnessTwoTone";
import { ColorContext } from "../contexts";
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
  const colorContext = useContext(ColorContext);

  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <div className="divToolbar"> */}
          <Link to="/home" className="linkNawBar">
            <Button
              size="small"
              // variant="flat"
              color="inherit"
              style={{ color: "white" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/students" className="linkNawBar">
            <Button
              size="small"
              // variant="flat"
              color="inherit"
              style={{ color: "white" }}
            >
              Students
            </Button>
          </Link>
          <Link to="/works" className="linkNawBar">
            <Button
              size="small"
              // variant="flat"
              color="inherit"
              style={{ color: "white" }}
            >
              Works
            </Button>
          </Link>
          <div className="divToolbar">
            <span style={{ fontSize: "23px" }}> Students-App </span>

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={colorContext.changeColor}
            >
              <SettingsIcon />
            </IconButton>
          </div>

          <Typography variant="h6" color="inherit" className={classes.grow} />
          <Link to="/signin" className="linkNawBar">
            <Button
              style={{ color: "white" }}
              size="small"
              // variant="flat"
              color="inherit"
            >
              SignIn
            </Button>
          </Link>
          <Link to="/signup" className="linkNawBar">
            <Button
              style={{ color: "white" }}
              size="small"
              color="inherit"
              variant="outlined"
            >
              SignUp
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
