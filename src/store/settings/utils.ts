import { Language } from '../../types'
import { STORE_NAME, STORE_NAME_LANGUAGE } from './constants'


const toLanguage = (language: string) => {
  const result = {
    id: language,
    code: language,
    name: language
  }
  return result
}

export const readItem = (name: string): string =>
  localStorage.getItem(`${STORE_NAME}.${name}`) as string


export const writeItem = (name: string, value: string) =>
  localStorage.setItem(`${STORE_NAME}.${name}`, value)


export const readLanguage = (): Language => {
  const lng = localStorage.getItem(`${STORE_NAME}.${STORE_NAME_LANGUAGE}`) as string
  return lng ? JSON.parse(lng) : toLanguage(navigator.language)
}


export const writeLanguage = (value: Language) =>
  localStorage.setItem(`${STORE_NAME}.${STORE_NAME_LANGUAGE}`, JSON.stringify(value))
