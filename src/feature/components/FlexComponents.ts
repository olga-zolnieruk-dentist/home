import styled, { CSSProperties } from "styled-components";


export interface FlexComponentProps extends CSSProperties {
}

export const FlexComponent = styled.div<FlexComponentProps>`
  display: flex;
`
