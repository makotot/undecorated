import styled from 'styled-components'
import React, { ReactNode } from 'react'

const StyledCloseButton = styled.button`
  margin-left: auto;
  appearance: none;
  padding: 0.5rem;
  background-color: #fff;
  color: #222;
  font-size: 1rem;
`

interface CloseButtonProps {
  children: ReactNode
  onClick: () => void
}

const CloseButton: React.SFC<CloseButtonProps> = ({ children, onClick }) => (
  <StyledCloseButton onClick={ onClick }>
    { children }
  </StyledCloseButton>
)

export {
  CloseButton,
}
