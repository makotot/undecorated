import React, { useContext, ReactNode } from 'react'
import styled from 'styled-components'
import { Wrapper } from './wrapper'
import { GutterRow } from 'undecorated'

const StyledHeader = styled.header`
  padding: 1.25rem 0;
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

type HeaderProps = {
  title: string,
  children?: ReactNode,
}

const Header: React.SFC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <Wrapper>
        <GutterRow.Block size="xs">
          <GutterRow.Element>
            <Heading>undecorated</Heading>
          </GutterRow.Element>
          <GutterRow.Element>
            <SubHeading>Collection of reusable layout pattern</SubHeading>
          </GutterRow.Element>
        </GutterRow.Block>
      </Wrapper>
    </StyledHeader>
  )
}

export {
  Header,
}
