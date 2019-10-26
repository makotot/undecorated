import React from 'react'
import slugify from '@sindresorhus/slugify'
import { MediaObject } from 'undecorated'
import { Dummy } from '../components/dummy'

const title = 'Media object'
const docs = {
  title,
  id: slugify(title),
  summary: 'media object with flexbox.',
  tags: [],
  iframe: false,
}

const template: React.SFC = () => {
  return (
    <div className="media-object">
      <div className="media-object__left"><Dummy /></div>
      <div className="media-object__body"><Dummy /></div>
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
} = MediaObject

const jsxTemplate = `
import { MediaObject } from 'undecorated'

<MediaObject.Block>
  <MediaObject.Element.Left><div class="dummy"></div></MediaObject.Element.Left>
  <MediaObject.Element.Body><div class="dummy"></div></MediaObject.Element.Body>
</MediaObject.Block>
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
