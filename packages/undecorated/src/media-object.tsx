import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const left = () => `
`

const body = () => `
  flex-grow: 1;
`

const element = {
  left,
  body,
}

const Left = styled.div`
  ${ left() }
`

const Body = styled.div`
  ${ body() }
`

const Element = {
  Left,
  Body,
}

const block = () => `
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Block = styled.div`
  ${ block() }

  ${ body() }

  ${ Element.Left } + ${ Element.Body } {
    marign-left: ${ tokens.spaces.s }rem;
  }
`

const defaultRules = `
  .media-object {
    ${ block() }
  }
  .media-object__left {
    ${ element.left() }
  }
  .media-object__body {
    ${ element.body() }
  }
  .media-object__left + .media-object__body {
    marign-left: ${ tokens.spaces.s }rem;
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
