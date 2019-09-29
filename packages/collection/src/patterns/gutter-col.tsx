import React from 'react'
import slugify from '@sindresorhus/slugify'
import { Dummy } from '../components/dummy'
import { GutterCol } from 'undecorated'

const title = 'gutter / column'
const docs = {
  title,
  id: slugify(title),
  summary: 'Putting in order elements horizontally at equal intervals.',
  tags: [],
}

const template: React.SFC = () => {
  return (
    <div className="gutter-col">
      <div className="gutter-col__item"><Dummy /></div>
      <div className="gutter-col__item"><Dummy /></div>
      <div className="gutter-col__item"><Dummy /></div>
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
} = GutterCol

const jsxTemplate = `
import { GutterCol } from 'undecorated'

<GutterRow.Block>
  <GutterCol.Element><Dummy /></GutterCol.Element>
  <GutterCol.Element><Dummy /></GutterCol.Element>
  <GutterCol.Element><Dummy /></GutterCol.Element>
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
