import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap/';
import { ThemeContext } from "../contexts";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar }  from 'react-bootstrap/';
import { Nav }  from 'react-bootstrap/';


function Header(props) {
  return (
    <div>
        <ThemeContext.Consumer>
            {({ color, changeColor }) => {
              let btnColor = (color === "primary") ? "info" : "light";
        return <Navbar bg={ color } variant="dark">
            <Navbar.Brand href="/home">Student-App</Navbar.Brand>
            <Nav className="mr-auto">
                   <Nav.Link> <Link to="/home" activeClassName="active">
                       <Button variant={ btnColor }>
                           Home
                       </Button>
                    </Link>
                   </Nav.Link>
                    <Nav.Link> <Link to="/students" activeClassName="active">
                        <Button variant={ btnColor } >
                            Students
                        </Button>
                    </Link>
                    </Nav.Link>
                    <Nav.Link> <Link to="/works" activeClassName="active">
                        <Button variant={ btnColor } >
                            Works
                        </Button>
                    </Link>
                    </Nav.Link>
                    <Nav.Link> <Link to="/signin" activeClassName="active">
                        <Button variant={ btnColor } >
                            Login
                        </Button>
                    </Link>
                    </Nav.Link>
            </Nav>

            <Button variant={ btnColor } onClick={ changeColor }> Change theme </Button>
        </Navbar>
            }}
        </ThemeContext.Consumer>
    </div>
  );
}

export default Header;
