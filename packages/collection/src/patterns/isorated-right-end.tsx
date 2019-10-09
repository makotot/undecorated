import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { Isorated } from 'undecorated'

const title = 'isolated / right end'
const docs = {
  title,
  id: slugify(title),
  summary: 'Isolated element at the right end among sibiling elements.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="isolated">
      <Dummy />
      <Dummy />
      <div className="isolated__element-right">
        <Dummy />
      </div>
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
  <Dummy />
  <Dummy />
  <Isolated.Element.Right>
    <Dummy />
  </Isolated.Element.Right>
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
