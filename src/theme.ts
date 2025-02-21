import { createGlobalStyle } from "styled-components";

export const theme = {
    colors: {
      gray100: "#F2F2F2",
      gray200: "#D9D9D9",
      gray300: "#808080",
      gray400: "#333333",
      gray500: "#262626",
      gray600: "#1A1A1A",
      gray700: "#0D0D0D",
      purple: "#8284FA",
      purpleDark: "5E60CE",
      blue: "#4EA8DE",
      blueDark: "#1E6F9F",
      danger: "#E25858",
      text: "#FFFFFF",

    },
  };

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;900&display=swap');
    body {
    background-color: ${({ theme }) => theme.colors.gray600};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    }
    input, textarea, select, button {
    font-family: inherit;
    font-size: inherit;
    }
`;
  