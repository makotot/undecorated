import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { StickyFooter } from 'undecorated'

const title = 'Sticky footer'
const docs = {
  title,
  id: slugify(title),
  summary: 'Sticky footer with flexbox. Footer is stick to bottom of viewport if the content of the page is shorter than window\'s height.',
  tags: [],
  iframe: true,
}

const template: React.SFC = () => {
  return (
    <div className="sticky-footer">
      <main>
      </main>
      <footer className="sticky-footer__foot">
        <Dummy />
      </footer>
    </div>
  )
}

const {
  block,
  element,
  rules,
  defaultRules,
  Block,
} = StickyFooter

const jsxTemplate = `
import { StickyFooter } from 'undecorated'

<StickyFooter.Block>
  <main></main>
  <StickyFooter.Element>
    <Dummy />
  </StickyFooter.Element>
</StickyFooter.Block>
`

export {
  block,
  element,
  rules,
  defaultRules,
  template,
  Block,
  docs,
  jsxTemplate,
}
