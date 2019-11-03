import React, { useContext, ReactNode } from 'react'
import { AppContext } from '../context/app-context'
import styled from 'styled-components'
import { Wrapper } from './wrapper'
import { GutterRow, Isorated, GutterCol } from 'undecorated'
import { Link } from 'gatsby'
import { FiMenu } from 'react-icons/fi'

const StyledHeader = styled.header`
  padding: 0.75rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`

const Heading = styled.h1`
  margin: 0;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const SubHeading = styled.p`
  color: #444;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
`

const Menu = () => {
  const { state, dispatch } = useContext(AppContext)
  const openDrawer = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({
      type: 'toggleDrawer',
      isOpened: true,
    })
  }

  return (
    <a href="#" onClick={ openDrawer }>
      <FiMenu />
    </a>
  )
}

const HeaderInner = styled(GutterCol.Block)`
  align-items: center;
`

type HeaderProps = {
  title: string,
  children?: ReactNode,
}

const Header: React.SFC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <HeaderInner>
          <GutterCol.Element>
            <Menu />
          </GutterCol.Element>
          <GutterCol.Element>
            <GutterRow.Block size="xs">
              <GutterRow.Element>
                <Heading><Link to="/">undecorated</Link></Heading>
              </GutterRow.Element>
              <GutterRow.Element>
                <SubHeading>Collection of reusable CSS layout pattern</SubHeading>
              </GutterRow.Element>
            </GutterRow.Block>
          </GutterCol.Element>
        </HeaderInner>
      </Wrapper>
    </StyledHeader>
  )
}

export {
  Header,
}
