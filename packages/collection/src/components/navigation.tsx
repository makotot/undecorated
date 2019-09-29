import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/app-context'
import { GutterRow } from 'undecorated'

const StyledNavLink = styled.a`
  display: inline-block;
  color: #444;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #3c59ff;
  }
`

interface NavLinkProps {
  children: ReactNode
  href: string
  external?: boolean
  onClick?: () => void
}

const NavLink: React.SFC<NavLinkProps> = props => (
  props.external ? <StyledNavLink target="blank" { ...props }>{ props.children }</StyledNavLink> : <StyledNavLink { ...props }>{ props.children }</StyledNavLink>
)

interface NavigationProps {
  children?: ReactNode,
}

const Navigation: React.SFC<NavigationProps> = ({ children }) => {
  const { state, dispatch } = useContext(AppContext)
  const closeDrawer = () => {
    dispatch({
      type: 'toggleDrawer',
      isOpened: false,
    })
  }

  return (
    <nav>
      <GutterRow.Block size="l">
        <GutterRow.Element>
          <NavLink href="https://github.com/makotot/undecorated" external>Github</NavLink>
        </GutterRow.Element>
      </GutterRow.Block>
    </nav>
  )
}

export { Navigation }
