import React from 'react'
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'
import { Wrapper } from './wrapper'

const StyledFooter = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Link = styled.a`
  color: #222;
  text-align: center;
`

const Text = styled.span`
  color: #444;
  font-size: 0.875rem;
`

const Footer = () => (
  <footer>
    <Wrapper>
      <StyledFooter>
        <Link href="https://github.com/makotot/undecorated/" target="_blank" rel="noopener">
          <FiGithub />
        </Link>
        &nbsp;<Text>Undecorated is a collection of reusable CSS layout.</Text>
      </StyledFooter>
    </Wrapper>
  </footer>
)

export {
  Footer,
}
