import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { STORE_NAME } from './constants'
import { 
  STORE_NAME_THEME_CURRENT, STORE_NAME_THEME_DARK, STORE_NAME_THEME_LIGHT,  ThemesState 
} from './types'
import { writeItem, writeState } from './utils'
import { INITIAL_VALUE } from './variables'
import { ThemeCode } from '../../themes'


const initialState: ThemesState = INITIAL_VALUE


export const themesSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setThemesDark: (state: ThemesState, action: PayloadAction<ThemeCode>) => {
      state[STORE_NAME_THEME_DARK] = action.payload
      writeItem(STORE_NAME_THEME_DARK, state[STORE_NAME_THEME_DARK])
      return state
    },
    setThemesLight: (state: ThemesState, action: PayloadAction<ThemeCode>) => {
      state[STORE_NAME_THEME_LIGHT] = action.payload
      writeItem(STORE_NAME_THEME_LIGHT, state[STORE_NAME_THEME_LIGHT])
      return state
    },
    setThemesState: (state: ThemesState, action: PayloadAction<ThemesState>) => {
      writeState(action.payload)
      return state
    },
    switchThemes: (state: ThemesState, action: PayloadAction<ThemeCode>) => {
      state[STORE_NAME_THEME_CURRENT] = action.payload
      writeItem(STORE_NAME_THEME_CURRENT, state[STORE_NAME_THEME_CURRENT])
      return state
    },
    toggleThemes: (state: ThemesState) => {
      state[STORE_NAME_THEME_CURRENT] = state[STORE_NAME_THEME_CURRENT] === state[STORE_NAME_THEME_LIGHT]
        ? state[STORE_NAME_THEME_DARK]
        : state[STORE_NAME_THEME_LIGHT]
      writeItem(STORE_NAME_THEME_CURRENT, state[STORE_NAME_THEME_CURRENT])
      return state
    }
  }
})
