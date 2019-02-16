import React, { useContext, Component } from "react";
import {ThemeContext} from '../contexts/ThemeContext';

function Home () {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
       <div  style ={theme} className = 'bodyForHome'>
         <h1>Home</h1>
       </div>
      )}
    </ThemeContext.Consumer>
  )
}
export default Home;
