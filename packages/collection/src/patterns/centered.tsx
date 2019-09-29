import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy, DummyWrapper } from '../components/dummy'
import { Centered } from 'undecorated'

const title = 'centered'
const docs = {
  title,
  id: slugify(title),
  summary: 'Centering a element vertically and horizontally by using flexbox.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <DummyWrapper>
      <div className="centered">
        <Dummy />
      </div>
    </DummyWrapper>
  )
}

const {
  block,
  defaultRules,
  rules,
  Block,
} = Centered

const jsxTemplate = `
import { Centered } from 'undecorated'

<DummyWrapper>
  <Centered.Block>
    <Dummy />
  </Centered.Block>
<DummyWrapper>
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
