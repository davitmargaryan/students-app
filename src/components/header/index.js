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
// import { ColorContext } from "../contexts";
import "../../App.css";
// import {ThemeContext} from '../contexts/ThemeContext';


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
  // const colorContext = useContext(ColorContext);
  function changeThemeButton (){
    props.changeTheme();
      let changeColorbutton = document.getElementById('iconChangeColorButton').style.background;
      if (!changeColorbutton) {changeColorbutton = '#023d38'};
      changeColorbutton = "#a1e1e8";
     
  }
  const { classes } = props;
  return (
    <div className = 'headerComp' >
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
                Works
              </Button>
            </Link>
          </div>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={changeThemeButton}
          >
            <SettingsIcon id = 'iconChangeColorButton' style = {{background:'red'}}/>
          </IconButton >
          <Typography variant="h6" color="inherit" className={classes.grow} />
          <Link to="/signin" className="linkNawBar">
            <Button size="small" variant="contained" color="inherit">
              SignIn
            </Button>
          </Link>
          <Link to="/signup" className="linkNawBar">
            <Button size="small" variant="contained" color="inherit">
              SignUp
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
