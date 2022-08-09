import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      text: string;
      invertedText: string;
      primary: string;
      danger: string;
      secondary: string;
      border: string;
    };
  }
}
