import { ThemeCode } from "../../themes";
import { STORE_NAME_THEME_CURRENT, STORE_NAME_THEME_DARK, STORE_NAME_THEME_LIGHT, ThemeName, ThemesState } from "./types";
import { readItem } from "./utils";


export const INITIAL_VALUE: ThemesState = {
  [ThemeName.Current]: readItem(STORE_NAME_THEME_CURRENT, ThemeCode.Light),
  [ThemeName.Light]: readItem(STORE_NAME_THEME_DARK, ThemeCode.Dark),
  [ThemeName.Dark]: readItem(STORE_NAME_THEME_LIGHT, ThemeCode.Light)
}