import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const left = () => `
  grid-area: mediaObjectLeft;
`

const head = () => `
  grid-area: mediaObjectHead;
`

const body = () => `
  grid-area: mediaObjectBody;
`

const element = {
  left,
  head,
  body,
}

const Left = styled.div`
  ${ left() }
`

const Head = styled.div`
  ${ head() }
`

const Body = styled.div`
  ${ body() }
`

const Element = {
  Left,
  Head,
  Body,
}

const block = () => `
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'mediaObjectLeft mediaObjectHead'
    'mediaObjectLeft mediaObjectBody';
  grid-gap: ${ tokens.spaces.s }rem;
`

const Block = styled.div`
  ${ block() }
`

const defaultRules = `
  .media-object {
    ${ block() }
  }

  .media-object__head {
    ${ element.head() }
  }

  .media-object__body {
    ${ element.body() }
  }

  .media-object__left {
    ${ element.left() }
  }
`

const rules = `
  ${ defaultRules }
`

export {
  block,
  element,
  Block,
  Element,
  defaultRules,
  rules,
}
