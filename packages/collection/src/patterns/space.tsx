import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { Space } from 'undecorated'

const title = 'space'
const docs = {
  title,
  id: slugify(title),
  summary: 'Adding spaces according to specified spaces and direction.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="space">
      <Dummy />
    </div>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = Space

const jsxTemplate = `
import { Space } from 'undecorated'

<Space.Block>
  <Dummy />
</Space.Block>
`

export {
  block,
  defaultRules,
  rules,
  template,
  Block,
  docs,
  jsxTemplate,
}
