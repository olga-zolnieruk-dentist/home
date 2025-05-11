import { themes } from './themes'
import { Theme, ThemeCode } from './types'


export const getThemeByMode = (theme: ThemeCode | undefined = ThemeCode.Light): Theme => {
  switch (theme) {
    case ThemeCode.Light:
      return themes[ThemeCode.Light]
    case ThemeCode.Dark:
      return themes[ThemeCode.Dark]
    default:
      return themes[ThemeCode.Light]
  }
}

