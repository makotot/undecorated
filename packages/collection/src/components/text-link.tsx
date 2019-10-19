import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const style = `
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

const StyledAnchor = styled.a`
  ${ style }
`

const StyledLink = styled(Link)`
  ${ style }
`

type Props = {
  to?: string,
  href?: string,
}

const TextLink: React.FC<Props> = ({ to = '#', href, children }) => (
  href ? <StyledAnchor href={ href }>{ children }</StyledAnchor> : <StyledLink to={ to }>{ children }</StyledLink>
)

export {
  TextLink,
}
