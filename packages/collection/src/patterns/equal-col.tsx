import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { EqualCol } from 'undecorated'

const title = 'equal columns'
const docs = {
  title,
  id: slugify(title),
  summary: 'Equal width columns with grid.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="equal-col">
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
} = EqualCol

const jsxTemplate = `
import { EqualCol } from 'undecorated'

<EqualCol.Block>
  <Dummy />
  <Dummy />
  <Dummy />
</EqualCol.Block>
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
