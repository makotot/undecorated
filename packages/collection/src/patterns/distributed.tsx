import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { Distributed } from 'undecorated'

const title = 'distributed'
const docs = {
  title,
  id: slugify(title),
  summary: 'Distributed elements by even space with full width.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="distributed">
      <Dummy />
      <Dummy />
      <Dummy />
    </div>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = Distributed

const jsxTemplate = `
import { Distributed } from 'undecorated'

<Distributed.Block>
  <Dummy />
  <Dummy />
  <Dummy />
</Distributed.Block>
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
