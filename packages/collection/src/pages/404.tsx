import React from "react"
import SEO from "../components/seo"
import { GlobalStyle } from '../components/global-style'
import { Wrapper } from '../components/wrapper'
import Layout from '../components/layout'
import { AppProvider } from '../context/app-context'

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <SEO title="404" />
    <AppProvider>
      <Layout>
        <Wrapper>
        </Wrapper>
      </Layout>
    </AppProvider>
  </>
)

export default NotFoundPage
