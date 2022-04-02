import React from "react";
import styled, { css } from "styled-components";
import { CircleWithCross } from "@styled-icons/entypo/CircleWithCross";

const StyledNoteHeader = styled.div`
  padding: 0.5rem 0;
  height: 1rem;
  background: transparent;
  color: ${(props) => props.theme.PrimaryTextColor};
  display: flex;
`;

const StyledCircleWithCross = styled(CircleWithCross)`
  height: 2rem;
  margin: 0 0.5rem;
  color: ${(props) => props.theme.DarkPrimaryColor};
`;

export function NoteHeader(props) {
  return (
    <StyledNoteHeader>
      <div style={{ flexGrow: 1 }}>{props.children}</div>
      <StyledCircleWithCross onClick={() => props.DeleteNote()} />
    </StyledNoteHeader>
  );
}
