import React, { useEffect, useContext } from "react";
import { NoteCard } from "./NoteCard";
import styled, { css } from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeContext } from "../utilities/ThemeContextProvider";
import { DataContext } from "../utilities/DataContextProvider";

const StyledBoard = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.LightPrimaryColor};
  display: flex;
  flex-direction: column;
`;

export function Board(props) {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { currentData, setCurrentData } = useContext(DataContext);

  return (
    <StyledBoard theme={currentTheme}>
      <Header />
      <div style={{ flexGrow: 1 }}>
        {currentData.map((note) => (
          <NoteCard data={note} key={note.Id} Id={note.Id} />
        ))}
      </div>
      <Footer />
    </StyledBoard>
  );
}
