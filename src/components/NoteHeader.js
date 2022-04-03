import React from "react";
import styled, { css } from "styled-components";
import { CircleWithCross } from "@styled-icons/entypo/CircleWithCross";

const StyledNoteHeader = styled.div`
  padding-bottom: 0.5rem;
  height: 1.5rem;
  background: transparent;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.PrimaryTextColor};
`;

const StyledCircleWithCross = styled(CircleWithCross)`
  height: 1.5rem;
  color: ${(props) => props.theme.DarkPrimaryColor};
`;

export function NoteHeader(props) {
  return (
    <StyledNoteHeader theme={props.theme}>
      <div style={{ flexGrow: 1 }}>{props.children}</div>
      <StyledCircleWithCross onClick={() => props.DeleteNote()} />
    </StyledNoteHeader>
  );
}
