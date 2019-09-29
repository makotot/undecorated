import styled from 'styled-components'
import React, { ReactNode } from 'react'

const Foot = styled.footer`
  margin-top: auto;
  padding-top: 1rem;
  text-align: center;
`

const StyledFootButton = styled.button`
  appearance: none;
  display: inline-flex;
  align-items: center;
  background-color: #FFF;
  color: #222;
  border: 1px solid #222;
  padding: 0.5rem;
  font-size: 0.675rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444;
    color: #fff;
  }
`

interface FootButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const FootButton: React.SFC<FootButtonProps> = ({ children, onClick }) => (
  <StyledFootButton onClick={ onClick }>
    { children }
  </StyledFootButton>
)

export {
  Foot,
  FootButton,
}
