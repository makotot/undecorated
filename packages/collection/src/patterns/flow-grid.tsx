import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { FlowGrid } from 'undecorated'

const title = 'flow grid'
const docs = {
  title,
  id: slugify(title),
  summary: 'As the window\'s width increases, grid items align side by side in 2 columns, on the other hands it stacks up vertically in smaller width screen.',
  tags: [],
  iframe: false,
}

const template: React.SFC = () => {
  return (
    <div className="flow-grid">
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
    </div>
  )
}

const {
  block,
  rules,
  defaultRules,
  Block,
} = FlowGrid

const jsxTemplate = `
import { FlowGrid } from 'undecorated'

<FlowGrid.Block>
  <Dummy />
  <Dummy />
  <Dummy />
  <Dummy />
</FlowGrid.Block>
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
