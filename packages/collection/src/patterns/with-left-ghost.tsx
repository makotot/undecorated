import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy, DummyInline } from '../components/dummy'
import { WithLeftGhost } from 'undecorated'

const title = 'with left ghost'
const docs = {
  title,
  id: slugify(title),
  summary: 'Place a non existing element on the left and arrange columns with same width.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="with-left-ghost">
      <Dummy />
      <div>
        <DummyInline />
      </div>
    </div>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = WithLeftGhost

const jsxTemplate = `
import { WithGhostLeft } from 'undecorated'

<WithLeftGhost.Block>
  <Dummy />
  <div>
    <DummyInline />
  </div>
</WithLeftGhost.Block>
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
