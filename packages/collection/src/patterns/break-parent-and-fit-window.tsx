import React from 'react'
import slugify from '@sindresorhus/slugify'
import { BreakParentAndFitWindow } from 'undecorated'
import { Dummy } from '../components/dummy'

const title = 'Break parent and fit window'
const docs = {
  title,
  id: slugify(title),
  summary: 'Breaks through parent width and fit width to window.',
  tags: [],
  iframe: true,
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const template: React.SFC = () => {
  return (
    <div className="break-parent-and-fit-window">
      <p>{ loremIpsum }</p>
      <div className="break-parent-and-fit-window__element"><Dummy /></div>
      <p>{ loremIpsum }</p>
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
} = BreakParentAndFitWindow

const jsxTemplate = `
import { BreakParentAndFitWindow } from 'undecorated'

<BreakParentAndFitWindow.Block>
  <p>${ loremIpsum }</p>
  <BreakParentAndFitWindow.Element><div class="dummy"></div></BreakParentAndFitWindow.Element>
  <p>${ loremIpsum }</p>
</BreakParentAndFitWindow.Block>
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
