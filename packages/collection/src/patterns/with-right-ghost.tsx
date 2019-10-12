import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy, DummyInline } from '../components/dummy'
import { WithRightGhost, InlineRightSide } from 'undecorated'

const title = 'with right ghost'
const docs = {
  title,
  id: slugify(title),
  summary: 'Place a non existing element on the right and arrange columns with same width.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="with-right-ghost">
      <div className="inline-right-side">
        <DummyInline />
      </div>
      <Dummy />
    </div>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = WithRightGhost

const jsxTemplate = `
import { WithRightGhost } from 'undecorated'

<WithRightGhost.Block>
  <InlineRightSide.Block>
    <DummyInline />
  </InlineRightSide.Block>
  <Dummy />
</WithRightGhost.Block>
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
