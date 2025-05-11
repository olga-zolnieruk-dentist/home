import { CSSProperties } from "styled-components"

export interface Theme extends CSSProperties{
}


export enum ThemeCode {
  Light = 'light',
  Dark = 'dark'
}


export const DEFAULT_THEME_COLOR_MODE_LIGHT = ThemeCode.Light
export const DEFAULT_THEME_COLOR_MODE_DARK = ThemeCode.Dark
export const DEFAULT_THEME_COLOR_MODE = DEFAULT_THEME_COLOR_MODE_LIGHT


//const theme = themes[ThemeCode.Light] as Theme;
//
// type AppTheme = { [color: string]: Theme };
// & typeof theme;


declare module 'styled-components' {
  export interface DefaultTheme extends Theme {

  }
}