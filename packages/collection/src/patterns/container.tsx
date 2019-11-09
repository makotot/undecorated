import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Container } from 'undecorated'
import { Dummy } from '../components/dummy'

const title = 'Container'
const docs = {
  title,
  id: slugify(title),
  summary: 'Container for the page layout.',
  tags: [],
  iframe: true,
}

const template: React.SFC = () => {
  return (
    <div className="container">
      <Dummy />
    </div>
  )
}

const {
  block,
  rules,
  defaultRules,
  Block,
} = Container

const jsxTemplate = `
import { Container } from 'undecorated'

<Container.Block>
  <div class="dummy"></div>
</Container.Block>
`

export {
  block,
  rules,
  defaultRules,
  template,
  Block,
  docs,
  jsxTemplate,
}
