import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { FixedHeader } from 'undecorated'

const title = 'Fixed header'
const docs = {
  title,
  id: slugify(title),
  summary: 'Fixed display at the top of the window.',
  tags: [],
  iframe: true,
}

const template: React.SFC = () => {
  return (
    <div className="fixed-header">
      <Dummy />
    </div>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = FixedHeader

const jsxTemplate = `
import { FixedHeader } from 'undecorated'

<FixedHeader.Block>
  <Dummy />
</FixedHeader.Block>
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
