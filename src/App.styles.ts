import { createGlobalStyle } from 'styled-components'


interface GlobalStyleProps {
  isBrowser?: boolean
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`
