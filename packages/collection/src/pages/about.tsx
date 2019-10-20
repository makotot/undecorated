import React from 'react'
import SEO from '../components/seo'
import { GlobalStyle } from '../components/global-style'
import { Wrapper } from '../components/wrapper'
import Layout from '../components/layout'
import { AppProvider } from '../context/app-context'
import { CodeBlock } from '../components/code-block'
import { Paragraph } from '../components/paragraph'
import { List, Item } from '../components/list'
import { GutterRow } from 'undecorated'
import { TextLink } from '../components/text-link'

const AboutPage = () => (
  <>
    <GlobalStyle />
    <SEO title="About" />
    <AppProvider>
      <Layout>
        <Wrapper>
          <GutterRow.Block>
            <GutterRow.Element>
              <Paragraph><TextLink to="/">Undecorated</TextLink> is Collection of reusable CSS layout pattern.</Paragraph>
              <br />
              <Paragraph>I made Undecorated mainly for the following two purposes.</Paragraph>
              <List>
                <Item>To be able to browse a variety of reusable CSS layout patterns and make them available for instant copy and paste.</Item>
                <Item>Just import it with npm so that you can create the layout you want.</Item>
              </List>
              <Paragraph>There are multiple sites that list layout patterns in grid and sites that introduce layout patterns in flexbox, but I could not find any sites that could view various layout patterns (regardless of properties such as flexbox, grid, table, etc) .
    <br />So I wanted to create a site where I could browse various CSS layout patterns.</Paragraph>
              <Paragraph>In addition, I want to make those layout patterns available anywhere just by <code>import</code>(For now with <TextLink href="https://styled-components.com">styled-components</TextLink>).</Paragraph>
              <Paragraph>For example, if you want to center an element vertically and horizontally, you can do it by just following.</Paragraph>
            </GutterRow.Element>
            <GutterRow.Element>
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
            </GutterRow.Element>
            <GutterRow.Element>
              <Paragraph>Unlike the existing flexbox and grid utility libraries that leave the layout to the user, it only provides patterns that achieve a specific CSS layout.</Paragraph>
            </GutterRow.Element>
          </GutterRow.Block>
        </Wrapper>
      </Layout>
    </AppProvider>
  </>
)

export default AboutPage
