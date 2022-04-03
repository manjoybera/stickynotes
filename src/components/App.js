import React from "react";
import { Board } from "./Board";
import { ThemeContextProvider } from "../utilities/ThemeContextProvider";
import { DataContextProvider } from "../utilities/DataContextProvider";

export function App() {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <Board />{" "}
      </DataContextProvider>
    </ThemeContextProvider>
  );
}
