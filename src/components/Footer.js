import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ThemeContext } from "../utilities/ThemeContextProvider";

const StyledFooter = styled.div`
  height: 5vh;
  background: transparent;
  text-align: center;
  color: ${(props) => props.theme.SecondaryTextColor};
`;

export function Footer() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  return (
    <StyledFooter theme={currentTheme}>
      Made with ❤ in India. © {new Date().getFullYear()} Manjoy Bera
      <div>
        See source code at{" "}
        <a
          href="https://github.com/manjoybera/stickynotes"
          target="_blank"
          rel="noreferrer"
          style={{ color: currentTheme.SecondaryTextColor }}
        >
          Github
        </a>
      </div>
    </StyledFooter>
  );
}
