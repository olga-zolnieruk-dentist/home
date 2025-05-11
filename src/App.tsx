import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDeviceSelectors } from "react-device-detect"
import { useDispatch, useSelector } from "react-redux"

import { About, Careers, Home, } from "./routes"
import { Navbar } from "./Navbar"
import "./App.css"
import { ThemeProvider } from "styled-components"
import { AppStoreType, selectorThemesThemeCurrent, themesSlice, ThemesStateAware } from "./store"
import { GlobalStyle } from './App.styles'
import { DEFAULT_THEME_COLOR_MODE, DEFAULT_THEME_COLOR_MODE_DARK, DEFAULT_THEME_COLOR_MODE_LIGHT, getThemeByMode, ThemeCode } from "./themes"

export const App: React.FC = () => {
  const dispatch = useDispatch<AppStoreType>()
  const [selectors,] = useDeviceSelectors(navigator.userAgent)
  const themeCode = useSelector<ThemesStateAware, ThemeCode>(selectorThemesThemeCurrent)

  const isThemes = (value?: ThemeCode) => value ? [DEFAULT_THEME_COLOR_MODE_LIGHT, DEFAULT_THEME_COLOR_MODE_DARK].includes(value) : false
  const getTheme = (value?: ThemeCode) => isThemes(value) ? value : DEFAULT_THEME_COLOR_MODE
  const onTheme = () => dispatch(themesSlice.actions.toggleThemes())


  useEffect(() => {
    /*initAPI(
      dispatch,
      () => history.location.pathname,
      (path: string) => ({ path: '*', exact: true, component: PageNotFound, title: LABEL_PAGE_NOT_FOUND_WITH_DOTS }),
      () => initGUIEngineComps()
    )*/


    dispatch(themesSlice.actions.setThemesDark(DEFAULT_THEME_COLOR_MODE_DARK))
    dispatch(themesSlice.actions.setThemesLight(DEFAULT_THEME_COLOR_MODE_LIGHT))

  }, [dispatch])  // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    if (!isThemes(themeCode)) {
      dispatch(themesSlice.actions.switchThemes(DEFAULT_THEME_COLOR_MODE))
    }
  }, [themeCode])  // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    console.debug("navigator.language", navigator.language)
    console.debug("navigator.languages", navigator.languages)
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <ThemeProvider theme={getThemeByMode(getTheme(themeCode))}>
      <GlobalStyle isBrowser={selectors.isBrowser} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
