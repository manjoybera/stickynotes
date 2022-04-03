import React, { useEffect, useContext } from "react";
import { NoteCard } from "./NoteCard";
import styled, { css } from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ThemeContext } from "../utilities/ThemeContextProvider";
import { DataContext } from "../utilities/DataContextProvider";
import GlobalCSS from "../styles/global.css";
import { useMediaQuery } from "react-responsive";

const StyledBoard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export function Board(props) {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { currentData, setCurrentData } = useContext(DataContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <StyledBoard>
      <GlobalCSS theme={currentTheme} />
      <Header />

      <div
        style={
          isTabletOrMobile && isPortrait
            ? {
                flexGrow: 1,
                display: "flex",
                flexWrap: "wrap",
                alignContent: "flex-start",
              }
            : { flexGrow: 1 }
        }
      >
        {currentData.map((note) => (
          <NoteCard data={note} key={note.Id} Id={note.Id} />
        ))}
      </div>
      <Footer />
    </StyledBoard>
  );
}
