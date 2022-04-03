import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.LightPrimaryColor};
    overflow-x: hidden;
    transition: background 500ms linear;
  }

  div, textarea, button {
    transition: all 500ms linear;
    transition-property: background, border;
  }

  body, body * {
    scrollbar-width: 0.5rem;
    scrollbar-color: ${(props) => props.theme.DarkPrimaryColor};
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.PrimaryColor};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.DarkPrimaryColor} ;
    border-radius: 6px;
  }



  textarea::-webkit-scrollbar {
    width: 0.5rem;
  }

  textarea::-webkit-scrollbar-track {
    background: ${(props) => props.theme.PrimaryColor};
  }

  textarea::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.DarkPrimaryColor};
    border-radius: 6px;
  }

  
  div::-webkit-scrollbar {
    width: 0.5rem;
  }

  div::-webkit-scrollbar-track {
    background: ${(props) => props.theme.PrimaryColor};
  }

  div::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.DarkPrimaryColor};
    border-radius: 6px;
  }
  
`;
