import React, { useContext } from "react";
import { NoteHeader } from "./NoteHeader";
import { NoteContent } from "./NoteContent";
import styled, { css } from "styled-components";
import Draggable from "react-draggable";
import { ThemeContext } from "../utilities/ThemeContextProvider";
import { DataContext } from "../utilities/DataContextProvider";
import { useMediaQuery } from "react-responsive";

const StyledNoteCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 0.5rem;
  width: 15rem;
  height: 15rem;
  background: ${(props) => props.theme.PrimaryColor};
  border: 2px solid ${(props) => props.theme.DarkPrimaryColor};
  margin: 0.5rem 0 0 0.5rem;

  &:hover {
    filter: brightness(105%);
  }
`;

export function NoteCard(props) {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { currentData, setCurrentData } = useContext(DataContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const SaveNotePosition = (e, draggableData) => {
    let note = currentData.filter((note) => note.Id == props.Id)[0];
    note.X = draggableData.x;
    note.Y = draggableData.y;
    setCurrentData(currentData);
  };

  const DeleteNote = (id) => {
    let newNotes = currentData.filter((note) => note.Id != props.Id);
    setCurrentData(newNotes);
  };

  const SaveNote = (value) => {
    let note = currentData.filter((note) => note.Id == props.Id)[0];
    note.Content = value;
    setCurrentData(currentData);
  };

  const NoteCardInner = (
    <StyledNoteCard theme={currentTheme}>
      <NoteHeader theme={currentTheme} DeleteNote={DeleteNote}>
        {props.data.Header}
      </NoteHeader>
      <NoteContent theme={currentTheme} SaveNote={SaveNote}>
        {props.data.Content}
      </NoteContent>
    </StyledNoteCard>
  );

  return isTabletOrMobile && isPortrait ? (
    <>{NoteCardInner}</>
  ) : (
    <Draggable
      defaultPosition={{ x: props.data.X, y: props.data.Y }}
      onStop={(e, data) => SaveNotePosition(e, data)}
    >
      {NoteCardInner}
    </Draggable>
  );
}
