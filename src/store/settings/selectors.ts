import { Language } from '../../types'
import { STORE_NAME, STORE_NAME_LANGUAGE } from './constants'
import {  SettingsState, SettingsStateAware} from './types'


export const selectorSettings = (state: SettingsStateAware): SettingsState => state[STORE_NAME]
export const selectorSettingsLanguage = (state: SettingsStateAware): Language => state[STORE_NAME]?.[STORE_NAME_LANGUAGE]
