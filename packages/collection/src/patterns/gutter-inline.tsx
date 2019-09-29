import React from 'react'
import slugify from '@sindresorhus/slugify'
import { DummyInline } from '../components/dummy'
import { GutterInline } from 'undecorated'

const title = 'gutter / inline';
const docs = {
  title,
  id: slugify(title),
  summary: 'Putting in order inline elements horizontally at equal intervals with wrapping text.',
  tags: [],
}

const template: React.SFC = () => (
  <div className="gutter-inline">
    <ul className="gutter-inline__inner">
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
      <li className="gutter-inline__item"><DummyInline /></li>
    </ul>
  </div>
)

const {
  block,
  defaultRules,
  rules,
  Block,
  Element,
} = GutterInline

const jsxTemplate = `
import { GutterInline } from 'undecorated'

<GutterInline.Block>
  <GutterInline.Element.Inner>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
    <GutterInline.Element.Item><DummyInline /></GutterInline.Element.Item>
  </GutterInline.Element.Inner>
</GutterInline.Block>
`

export {
  block,
  defaultRules,
  rules,
  template,
  Block,
  Element,
  docs,
  jsxTemplate,
}
