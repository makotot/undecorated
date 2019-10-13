import React from 'react'
import SEO from '../components/seo'
import { GlobalStyle } from '../components/global-style'
import { Wrapper } from '../components/wrapper'
import Layout from '../components/layout'
import { AppProvider } from '../context/app-context'
import { CodeBlock } from '../components/code-block'
import { Paragraph } from '../components/paragraph'

const AboutPage = () => (
  <>
    <GlobalStyle />
    <SEO title="About" />
    <AppProvider>
      <Layout>
        <Wrapper>
          <Paragraph>I made Undecorated mainly for the following two purposes.</Paragraph>
          <Paragraph>To be able to browse a variety of reusable CSS layout patterns and make them available for instant copy and paste.</Paragraph>
          <Paragraph>Just import it with npm so that you can create the layout you want.</Paragraph>
          <Paragraph>There are multiple sites that list layout patterns in grid and sites that introduce layout patterns in flexbox, but I could not find any sites that could view various layout patterns (regardless of properties such as flexbox, grid, table, etc) .
So I wanted to create a site where I could browse various CSS layout patterns.</Paragraph>
          <Paragraph>In addition, I want to make those layout patterns available anywhere just by <code>import</code>(For now with styled-components).</Paragraph>
          <Paragraph>For example, if you want to center an element vertically and horizontally, you can do it by just following.</Paragraph>
<CodeBlock
  lang="jsx"
  code={
`
import { Centered } from 'undecorated'

<Centered>
  <SomethingYouWantToCenter />
</Centered>
`
}
/>
          <Paragraph>Unlike the existing flexbox and grid utility libraries that leave the layout to the user, it only provides patterns that achieve a specific CSS layout.</Paragraph>
        </Wrapper>
      </Layout>
    </AppProvider>
  </>
)

export default AboutPage
