import React, { useContext, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { StickyNote } from "@styled-icons/fa-solid/StickyNote";
import { CommentAdd } from "@styled-icons/boxicons-solid/CommentAdd";
import { DeleteDismiss } from "@styled-icons/fluentui-system-filled/DeleteDismiss";
import { ThemeContext } from "../utilities/ThemeContextProvider";
import { availableThemes } from "../constants/themes";
import { DataContext } from "../utilities/DataContextProvider";
import { useMediaQuery } from "react-responsive";

const StyledHeader = styled.div`
  display: flex;
  background: transparent;

  ${(props) =>
    !props.mobile &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.mobile &&
    css`
      flex-direction: column;
    `}
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
  align-items: end;
  color: ${(props) => props.theme.DarkSecondaryColor};

  ${(props) =>
    props.mobile &&
    css`
      align-self: flex-end;
    `}
`;

const slideOut = keyframes`
  from {
    transform: translate(3rem);
  }

  to {
    transform: translate(0);
  }
`;

const StyledColorPicker = styled.div`
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
  border-radius: 50%;
  background: ${(props) => props.availableThemes.PrimaryColor};
  border: 2px solid ${(props) => props.availableThemes.DarkPrimaryColor};

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-out;
    cursor: pointer;
  }

  ${(props) =>
    !props.current &&
    css`
      animation: 0.3s ${slideOut} ease-out;
    `}
`;

const StyledButton = styled.button`
  height: 2.5rem;
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
  font-size: 1.3rem;
  color: ${(props) => props.theme.SecondaryTextColor};

  &:hover {
    filter: brightness(105%);
    cursor: pointer;
  }
`;

const StyledCommentAdd = styled(CommentAdd)`
  height: 1.5rem;
  color: ${(props) => props.theme.SecondaryTextColor};
  width: auto;
`;

const StyledDeleteDismiss = styled(DeleteDismiss)`
  height: 1.5rem;
  color: ${(props) => props.theme.SecondaryTextColor};
  width: auto;
`;

export function Header() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { currentData, setCurrentData } = useContext(DataContext);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const [showSelectionColors, setShowSelectionColors] = useState(false);

  const AddNewNote = () => {
    let maxId =
      currentData.length > 0
        ? currentData.map((note) => note.Id).sort((a, b) => b - a)[0]
        : 0;
    let newId = maxId + 1;
    let note = {
      Id: newId,
      Header: "Note #" + newId,
      Content: "",
      X: Math.floor(Math.random() * (window.innerWidth / 2)),
      Y: Math.floor(Math.random() * (window.innerHeight / 10)),
    };
    currentData.push(note);
    setCurrentData(currentData);
  };

  const ClearAllNote = () => {
    setCurrentData([]);
  };

  useEffect(() => {
    if (showSelectionColors) {
      setTimeout(() => setShowSelectionColors(false), 5000);
    }
  }, [showSelectionColors]);

  const StyledColorPickerDiv = (
    <>
      {showSelectionColors &&
        availableThemes
          .filter((theme) => theme.Key != currentTheme.Key)
          .map((theme) => (
            <StyledColorPicker
              availableThemes={theme}
              onClick={() => setCurrentTheme(theme)}
              key={theme.Key}
              title={"Pick a Color"}
            />
          ))}
      <StyledColorPicker
        availableThemes={currentTheme}
        onClick={() => setShowSelectionColors(true)}
        title={"Pick a Color"}
        current
      />
    </>
  );

  return (
    <StyledHeader mobile={isTabletOrMobile && isPortrait}>
      <StyledHeaderText
        theme={currentTheme}
        mobile={isTabletOrMobile && isPortrait}
      >
        <StyledSticyNoteIcon /> Sticky Notes
      </StyledHeaderText>
      {isTabletOrMobile && isPortrait ? (
        <div style={{ display: "flex", alignSelf: "flex-end" }}>
          {StyledColorPickerDiv}
        </div>
      ) : (
        StyledColorPickerDiv
      )}
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
