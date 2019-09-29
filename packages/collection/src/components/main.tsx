import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  padding: 2rem 0 1rem;
`

const Main: React.SFC = ({ children }) => <StyledMain>{ children }</StyledMain>

export {
  Main,
}
