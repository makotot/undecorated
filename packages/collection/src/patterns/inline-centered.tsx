import React from 'react'
import slugify from '@sindresorhus/slugify'
import { DummyInline } from '../components/dummy'
import { InlineCentered } from 'undecorated'

const title = 'inline centered'
const docs = {
  title,
  id: slugify(title),
  summary: 'Centering an inline element.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="inline-centered">
      <DummyInline />
    </div>
  )
}

const {
  block,
  rules,
  defaultRules,
  Block,
} = InlineCentered

const jsxTemplate = `
import { InlineCentered } from 'undecorated'

<InlineCentered.Block>
  <DummyInline />
</InlineCentered.Block>
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
