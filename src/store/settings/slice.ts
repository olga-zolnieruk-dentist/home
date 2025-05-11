import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { STORE_NAME, STORE_NAME_LANGUAGE } from './constants'
import { SettingsState } from './types'
import { Language } from '../../types'
import { readLanguage, writeLanguage } from './utils'
import { INITIAL_VALUE } from './variables'



const initialState: SettingsState = INITIAL_VALUE


export const settingsSlice = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setLanguage: (state: SettingsState, action: PayloadAction<Language>) => {
      state[STORE_NAME_LANGUAGE] = action.payload
      writeLanguage(state[STORE_NAME_LANGUAGE])
      return state
    },
    getLanguage: <T>(state: SettingsState, action: PayloadAction<Language>) => {
      action.payload = state[STORE_NAME_LANGUAGE] ?? readLanguage()
    },
  }
})
