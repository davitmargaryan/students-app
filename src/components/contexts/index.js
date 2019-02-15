import React from "react";

export const ThemeContext = React.createContext({
  color: "primary",
  changeColor: () => {}
});
