import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  max-width: 980px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Wrapper: React.SFC = ({ children }) => (
  <StyledWrapper>{ children }</StyledWrapper>
)

export {
  Wrapper,
}