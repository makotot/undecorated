import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { GutterRow } from 'undecorated'

const title = 'gutter / row'
const docs = {
  title,
  id: slugify(title),
  summary: 'Putting in order elements vertically at equal intervals.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="gutter-row">
      <div className="gutter-row__item"><Dummy /></div>
      <div className="gutter-row__item"><Dummy /></div>
      <div className="gutter-row__item"><Dummy /></div>
    </div>
  )
}

const {
  block,
  element,
  defaultRules,
  rules,
  Block,
  Element
} = GutterRow

const jsxTemplate = `
import { GutterRow } from 'undecorated'

<GutterRow.Block>
  <GutterRow.Element><Dummy /></GutterRow.Element>
  <GutterRow.Element><Dummy /></GutterRow.Element>
  <GutterRow.Element><Dummy /></GutterRow.Element>
</GutterRow.Block>
`

export {
  block,
  element,
  defaultRules,
  rules,
  template,
  Block,
  Element,
  docs,
  jsxTemplate,
}
