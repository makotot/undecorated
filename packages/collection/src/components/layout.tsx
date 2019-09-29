import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import { Header } from './header'
import { Wrapper } from './wrapper'
import { Main } from './main'
import { Footer } from './footer'

const Layout: React.SFC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header title={ 'Undecorated Collection' } />
      <Main>
        { children }
      </Main>
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
