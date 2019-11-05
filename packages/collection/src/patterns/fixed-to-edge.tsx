import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { FixedToEdge } from 'undecorated'

const title = 'Fixed to edge'
const docs = {
  title,
  id: slugify(title),
  summary: 'Fixed to the edge.',
  tags: [],
  iframe: true,
}

const template: React.SFC = () => {
  return (
    <div className="fixed-to-edge-top">
      <Dummy />
    </div>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = FixedToEdge

const jsxTemplate = `
import { FixedToEdge } from 'undecorated'

<FixedToEdge.Block edge="top">
  <Dummy />
</FixedToEdge.Block>
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
