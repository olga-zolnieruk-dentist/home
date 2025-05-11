import { ThemeCode } from "../../themes"
import { STORE_NAME } from "./constants"


export enum ThemeName {
  Current = 'current',
  Dark = 'dark',
  Light = 'light'
}


export const STORE_NAME_THEME_CURRENT: ThemeName = ThemeName.Current
export const STORE_NAME_THEME_DARK: ThemeName = ThemeName.Dark
export const STORE_NAME_THEME_LIGHT: ThemeName = ThemeName.Light


export interface ThemesState {
  [ThemeName.Current]: ThemeCode
  [ThemeName.Dark]: ThemeCode
  [ThemeName.Light]: ThemeCode
}

export interface ThemesStateAware {
  [STORE_NAME]: ThemesState
}
