import React, { useContext, Component } from "react";
import {ThemeContext} from '../contexts/ThemeContext';

function Works() {

  return (
    <ThemeContext.Consumer>
      {(theme) => (
       <div  style ={theme} className = 'bodyForHome'>
         <h1>Works</h1>
       </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Works;
