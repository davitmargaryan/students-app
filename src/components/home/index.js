import React, { useContext } from "react";
import { ThemeContext } from "../contexts";

function Home() {
  const context = useContext(ThemeContext);
  return (
    <div>
      {context.color}
      <h1 style={context}>Home page will be available soon</h1>
    </div>
  );
}

export default Home;
