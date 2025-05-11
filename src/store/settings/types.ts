import { Language } from "../../types"
import { STORE_NAME, STORE_NAME_LANGUAGE } from "./constants"


export interface SettingsLanguageGet<T = any> extends Language {
  result?: T
}

export interface SettingsState {
  [STORE_NAME_LANGUAGE]: Language
}

export interface SettingsStateAware {
  [STORE_NAME]: SettingsState
}
