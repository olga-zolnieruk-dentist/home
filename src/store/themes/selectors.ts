import { ThemeCode } from '../../themes'
import { STORE_NAME } from './constants'
import {
  STORE_NAME_THEME_CURRENT, STORE_NAME_THEME_DARK, STORE_NAME_THEME_LIGHT,
  ThemesState, ThemesStateAware
} from './types'


export const selectorThemesThemes = (state: ThemesStateAware): ThemesState => state[STORE_NAME]
export const selectorThemesThemeCurrent = (state: ThemesStateAware): ThemeCode => state[STORE_NAME]?.[STORE_NAME_THEME_CURRENT]
export const selectorThemesThemeDark = (state: ThemesStateAware): ThemeCode => state[STORE_NAME]?.[STORE_NAME_THEME_DARK]
export const selectorThemesThemeLight = (state: ThemesStateAware): ThemeCode => state[STORE_NAME]?.[STORE_NAME_THEME_LIGHT]
