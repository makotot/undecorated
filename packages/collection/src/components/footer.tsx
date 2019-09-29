import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { InlineCentered } from 'undecorated'

const StyledFooter = styled(InlineCentered.Block)`
  padding: 1rem 0;
`

const Link = styled.a`
  color: #222;
`

const Footer = () => (
  <footer>
    <StyledFooter>
      <Link href="https://github.com/makotot/undecorated/" target="_blank" rel="noopener">
        <FiGithub />
      </Link>
    </StyledFooter>
  </footer>
)

export {
  Footer,
}
