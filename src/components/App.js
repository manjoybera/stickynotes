import React from "react";
import { Board } from "./Board";
import GlobalCSS from "../styles/global.css";
import { ThemeContextProvider } from "../utilities/ThemeContextProvider";
import { DataContextProvider } from "../utilities/DataContextProvider";

export function App() {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <GlobalCSS />
        <Board />{" "}
      </DataContextProvider>
    </ThemeContextProvider>
  );
}
