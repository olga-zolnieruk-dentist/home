import { ThemeCode } from '../../themes'
import { STORE_NAME } from './constants'
import { STORE_NAME_THEME_CURRENT, STORE_NAME_THEME_DARK, STORE_NAME_THEME_LIGHT, ThemeName, ThemesState } from './types'


export const readItem = (name: ThemeName, themeColorDefault: ThemeCode): ThemeCode =>
  localStorage.getItem(`${STORE_NAME}.${name}`) as ThemeCode ?? themeColorDefault


export const writeItem = (name: ThemeName, themes: ThemeCode) =>
  localStorage.setItem(`${STORE_NAME}.${name}`, themes)


export const writeState = (state: ThemesState) => {
  writeItem(STORE_NAME_THEME_CURRENT, state[STORE_NAME_THEME_CURRENT])
  writeItem(STORE_NAME_THEME_DARK, state[STORE_NAME_THEME_DARK])
  writeItem(STORE_NAME_THEME_LIGHT, state[STORE_NAME_THEME_LIGHT])
}
