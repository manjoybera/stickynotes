import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();
const defaultData = [];

export function DataContextProvider({ children }) {
  const [currentData, setInternalCurrentData] = useState(defaultData);

  const setCurrentData = (data) => {
    window.localStorage.setItem("currentData", JSON.stringify(data));
    setInternalCurrentData([...data]);
  };

  useEffect(() => {
    const localData = JSON.parse(window.localStorage.getItem("currentData"));
    localData && setInternalCurrentData(localData);
  }, []);

  return (
    <DataContext.Provider value={{ currentData, setCurrentData }}>
      {children}
    </DataContext.Provider>
  );
}
