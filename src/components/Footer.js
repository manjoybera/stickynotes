import React from "react";
import styled, { css } from "styled-components";

const StyledFooter = styled.div`
  height: 5vh;
  width: 100vw;
  background: transparent;
  text-align: center;
`;

export function Footer() {
  return (
    <StyledFooter>
      Made with ❤ in India. © {new Date().getFullYear()} Manjoy Bera
      <div>
        See source code at{" "}
        <a
          href="https://github.com/manjoybera/stickynotes"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </StyledFooter>
  );
}
