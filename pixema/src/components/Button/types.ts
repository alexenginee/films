import * as React from "react";

export enum ButtonAppearance {
  Primary,
  Secondary,
  Secondary2,
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance;
  children: React.ReactNode;
}
