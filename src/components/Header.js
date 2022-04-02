import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { StickyNote } from "@styled-icons/fa-solid/StickyNote";
import { CommentAdd } from "@styled-icons/boxicons-solid/CommentAdd";
import { DeleteDismiss } from "@styled-icons/fluentui-system-filled/DeleteDismiss";
import { ThemeContext } from "../utilities/ThemeContextProvider";
import { availableThemes } from "../constants/themes";
import { DataContext } from "../utilities/DataContextProvider";
import { Random } from "@styled-icons/fa-solid";

const StyledHeader = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  background: transparent;
`;

const StyledSticyNoteIcon = styled(StickyNote)`
  color: ${(props) => props.theme.DarkSecondaryColor};
  height: 2rem;
  margin: 0.5rem;
`;

const StyledHeaderText = styled.div`
  flex-grow: 1;
  display: flex;
  margin: 0.5rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.DarkSecondaryColor};
`;

const StyledColorPicker = styled.div`
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  border-radius: 50%;
  background: ${(props) => props.availableThemes.PrimaryColor};
  border: 2px solid ${(props) => props.availableThemes.DarkPrimaryColor};
`;

const StyledButton = styled.button`
  height: 3rem;
  margin: 0.5rem;
  border-radius: 3px;
  background: ${(props) =>
    props.Primary
      ? props.theme.SecondaryColor
      : props.theme.LightSecondaryColor};
  border: 2px solid
    ${(props) =>
      props.Primary
        ? props.theme.DarkSecondaryColor
        : props.theme.SecondaryColor};
  color: ${(props) => props.theme.SecondaryTextColor};
  font-size: 1.5rem;
  color: ${(props) => props.theme.SecondaryTextColor};
`;

const StyledCommentAdd = styled(CommentAdd)`
  height: 2rem;
  color: ${(props) => props.theme.SecondaryTextColor};
  width: auto;
`;

const StyledDeleteDismiss = styled(DeleteDismiss)`
  height: 2rem;
  color: ${(props) => props.theme.SecondaryTextColor};
  width: auto;
`;

export function Header() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { currentData, setCurrentData } = useContext(DataContext);

  const AddNewNote = () => {
    let maxId =
      currentData.length > 0
        ? currentData.map((note) => note.Id).sort((a, b) => b - a)[0]
        : 0;
    let newId = maxId + 1;
    let note = {
      Id: newId,
      Header: "Note #" + newId,
      Content: "Some random Note " + newId,
      X: Math.floor(Math.random() * 500),
      Y: Math.floor(Math.random() * 300),
    };
    currentData.push(note);
    setCurrentData(currentData);
  };

  const ClearAllNote = () => {
    setCurrentData([]);
  };

  return (
    <StyledHeader>
      <StyledHeaderText theme={currentTheme}>
        <StyledSticyNoteIcon /> Sticky Notes
      </StyledHeaderText>
      <StyledColorPicker availableThemes={currentTheme} />
      {availableThemes.map((theme) => (
        <StyledColorPicker
          availableThemes={theme}
          onClick={() => setCurrentTheme(theme)}
          key={theme.Key}
        />
      ))}
      <StyledButton theme={currentTheme} onClick={() => AddNewNote()} Primary>
        <StyledCommentAdd />
        New
      </StyledButton>
      <StyledButton theme={currentTheme} onClick={() => ClearAllNote()}>
        <StyledDeleteDismiss /> Clear All
      </StyledButton>
    </StyledHeader>
  );
}
