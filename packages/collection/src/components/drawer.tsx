import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AppContext } from '../context/app-context'
import { GutterRow } from 'undecorated'

const NavHeading = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
`

const NavHeadingLink = styled(Link)`
  color: #555;
  text-decoration: none;
`

interface DrawerBackgroundProps {
  isHidden: boolean
}

const DrawerBackground = styled.a`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(68, 68, 68, 0.25);
  z-index: 3;
  transition: all 0.3s ease;
  display: ${ (props: DrawerBackgroundProps) => props.isHidden ? 'none' : '' };
  opacity: ${ (props: DrawerBackgroundProps) => props.isHidden ? 0 : 1 };
`

interface StyledDrawerProps {
  isHidden: boolean,
}

const StyledDrawer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 2rem 10vw 2rem 2rem;
  background-color: #fff;
  color: #444;
  z-index: 4;
  transition: all 0.3s ease;
  transform: ${ (props: StyledDrawerProps) => props.isHidden ? 'translateX(-100%)' : 'translateX(0)' };
`

interface DrawerProps {
  children?: ReactNode,
}

const Drawer: React.SFC<DrawerProps> = ({ children }) => {
  const { state, dispatch } = useContext(AppContext)
  const closeDrawer = (e: any) => {
    e.preventDefault()
    dispatch({
      type: 'toggleDrawer',
      isOpened: false,
    })
  }

  return (
    <>
      <DrawerBackground onClick={ closeDrawer } isHidden={ !state.isOpened } />
      <StyledDrawer isHidden={ !state.isOpened }>
        <GutterRow.Block size="xl">
          <GutterRow.Element>
            <NavHeading>
              <NavHeadingLink to="/">undecorated</NavHeadingLink>
            </NavHeading>
          </GutterRow.Element>
          <GutterRow.Element>
            { children }
          </GutterRow.Element>
        </GutterRow.Block>
      </StyledDrawer>
    </>
  )
}

export { Drawer }
