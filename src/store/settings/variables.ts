import { STORE_NAME_LANGUAGE } from "./constants";
import { SettingsState } from "./types";
import { readLanguage } from "./utils";


export const INITIAL_VALUE: SettingsState = {
  [STORE_NAME_LANGUAGE]: readLanguage()
}