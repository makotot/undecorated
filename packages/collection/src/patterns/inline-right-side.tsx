import React from 'react'
import slugify from '@sindresorhus/slugify'
import { DummyInline } from '../components/dummy'
import { InlineRightSide } from 'undecorated'

const title = 'inline right side'
const docs = {
  title,
  id: slugify(title),
  summary: 'Places an inline element to right side.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="inline-right-side">
      <DummyInline />
    </div>
  )
}

const {
  block,
  rules,
  defaultRules,
  Block,
} = InlineRightSide

const jsxTemplate = `
import { InlineRightSide } from 'undecorated'

<InlineRightSide.Block>
  <DummyInline />
</InlineRightSide.Block>
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
