import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";

const StyledNoteContent = styled.div`
  background: transparent;
  color: ${(props) => props.theme.PrimaryTextColor};
  flex-grow: 1;
  white-space: pre-wrap;
  overflow-y: auto;
  overflow-wrap: anywhere;
`;

const StyledNoteInput = styled.textarea`
  background: transparent;
  color: ${(props) => props.theme.PrimaryTextColor};
  flex-grow: 1;
  outline: 0;
  border: 0;
  resize: none;
`;

export function NoteContent(props) {
  const [isEditing, setIsEditing] = useState(false);

  const SaveNotes = (e) => {
    props.SaveNote(e.target.value);
    setIsEditing(false);
  };

  return isEditing ? (
    <StyledNoteInput
      theme={props.theme}
      defaultValue={props.children}
      onBlur={(e) => SaveNotes(e)}
    />
  ) : (
    <StyledNoteContent
      theme={props.theme}
      onDoubleClick={() => setIsEditing(true)}
    >
      {props.children}
    </StyledNoteContent>
  );
}
