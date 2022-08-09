import { Global, ThemeProvider } from "@emotion/react";
import * as React from "react";

import { rebootCSS } from "components/AppThemeProvider/reboot";
import { appTheme } from "components/AppThemeProvider/AppTheme";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={appTheme.light}>
      <Global styles={rebootCSS} />
      {children}
    </ThemeProvider>
  );
}
