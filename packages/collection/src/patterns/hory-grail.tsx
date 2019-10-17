import React from 'react'
import slugify from '@sindresorhus/slugify'
import { HoryGrail } from 'undecorated'
import { DummyBackground } from '../components/dummy'

const title = 'hory grail'
const docs = {
  title,
  id: slugify(title),
  summary: 'hory grail layout with grid.',
  tags: [],
  iframe: true,
}

const template: React.SFC = () => {
  return (
    <div className="hory-grail">
      
      <header className="hory-grail__head"><DummyBackground bgColor="#efafcc" /></header>
      <main className="hory-grail__body"><DummyBackground bgColor="#a7f5b7" /></main>
      <aside className="hory-grail__left"><DummyBackground bgColor="#7e91ff" /></aside>
      <aside className="hory-grail__right"><DummyBackground bgColor="#7e91ff" /></aside>
      <footer className="hory-grail__foot"><DummyBackground bgColor="#efe8af" /></footer>
    </div>
  )
}

const {
  block,
  element,
  rules,
  defaultRules,
  Block,
  Element,
} = HoryGrail

const jsxTemplate = `
import { HoryGrail } from 'undecorated'

<HoryGrail.Block>
  <HoryGrail.Element.Head><div class="dummy-background" style="background-color: #efafcc;"></div></HoryGrail.Element.Head>
  <HoryGrail.Element.Body><div class="dummy-background" style="background-color: #a7f5b7;"></div></HoryGrail.Element.Body>
  <HoryGrail.Element.Left><div class="dummy-background" style="background-color: #7e91ff;"></div></HoryGrail.Element.Left>
  <HoryGrail.Element.Right><div class="dummy-background" style="background-color: #7e91ff;"></div></HoryGrail.Element.Right>
  <HoryGrail.Element.Foot><div class="dummy-background" style="background-color: #efe8af;"></div></HoryGrail.Element.Foot>
</HoryGrail.Block>
`

export {
  block,
  element,
  rules,
  defaultRules,
  template,
  Block,
  Element,
  docs,
  jsxTemplate,
}
