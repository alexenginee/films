import type { Theme } from "@emotion/react";

export enum FontSize {
  Small = "14px",
  Regular = "16px",
  Large = "20px",
}

const lightTheme: Theme = {
  colors: {
    text: "rgba(0, 0, 0, 0.80)",
    invertedText: "white",
    primary: "#2435a7",
    danger: "#fa3c2e",
    secondary: "#dadada",
    border: "rgba(0, 0, 0, 0.18)",
  },
};

const darkTheme: Theme = {
  colors: {
    text: "rgba(255, 255, 255, 0.87)",
    invertedText: "rgba(0, 0, 0, 0.80)",
    primary: "#2435a7",
    danger: "#fa3c2e",
    secondary: "#dadada",
    border: "rgba(255, 255, 255, 0.11)",
  },
};

export const appTheme = {
  light: lightTheme,
  dark: darkTheme,
};
