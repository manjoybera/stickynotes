import React, { createContext, useState, useEffect } from "react";
import { defaultTheme } from "../constants/themes";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [currentTheme, setInternalCurrentTheme] = useState(defaultTheme);

  const setCurrentTheme = (theme) => {
    window.localStorage.setItem("currentTheme", JSON.stringify(theme));
    setInternalCurrentTheme(Object.assign({}, theme));
  };

  useEffect(() => {
    const localTheme = JSON.parse(window.localStorage.getItem("currentTheme"));
    localTheme && setInternalCurrentTheme(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
