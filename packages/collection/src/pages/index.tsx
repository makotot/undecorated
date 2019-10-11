import React from "react"
import SEO from "../components/seo"
import { GlobalStyle } from '../components/global-style'
import { Wrapper } from '../components/wrapper'
import { Collections } from '../components/collections'
import Layout from '../components/layout'
import { AppProvider } from '../context/app-context'

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO title="" />
    <AppProvider>
      <Layout>
        <Wrapper>
          <Collections />
        </Wrapper>
      </Layout>
    </AppProvider>
  </>
)

export default IndexPage
