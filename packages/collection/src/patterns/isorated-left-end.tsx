import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { Isorated } from 'undecorated'

const title = 'isolated / left end'
const docs = {
  title,
  id: slugify(title),
  summary: 'Isolated element at the left end among sibiling elements.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="isolated">
      <div className="isolated__element-left">
        <Dummy />
      </div>
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
} = Isorated

const jsxTemplate = `
import { Isorated } from 'undecorated'

<Isolated.Block>
  <Isolated.Element at="left">
    <Dummy />
  </Isolated.Element>
  <Dummy />
  <Dummy />
</Isolated.Block>
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
