import { dark } from "./dark";
import { light } from "./light";


export interface Theme {
}

export enum ThemeCode {
  Light = 'light',
  Dark = 'dark'
}

export const themes = {
  [ThemeCode.Light]: light,
  [ThemeCode.Dark]: dark
}