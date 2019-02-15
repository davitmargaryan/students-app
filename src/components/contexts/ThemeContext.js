import React from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#a1e1e8',
    color:'yellow',
    fontStyle:'italic'
  },
  dark: {
    foreground: '#ffffff',
    background: '#023d38',
    color:'#e8016ab3'
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);