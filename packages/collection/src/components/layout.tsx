import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import { Header } from './header'
import { Wrapper } from './wrapper'
import { Main } from './main'
import { Footer } from './footer'
import { StickyFooter } from "undecorated"
import { Navigation } from "./navigation"
import { Drawer } from "./drawer"
import { ThemeProvider } from "styled-components"
import { main } from './theme'

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
      <ThemeProvider theme={ main }>
        <StickyFooter.Block>
          <Header title={ 'Undecorated Collection' } />
          <Drawer>
            <Navigation />
          </Drawer>
          <Main>
            { children }
          </Main>
          <StickyFooter.Element>
            <Wrapper>
              <Footer />
            </Wrapper>
          </StickyFooter.Element>
        </StickyFooter.Block>
      </ThemeProvider>
    </>
  )
}

export default Layout
