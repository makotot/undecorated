import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const block = () => `
  width: calc(${ tokens.width.container.s } - ${ tokens.spaces.l * 2 }rem);
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${ tokens.breakPoints.m }px) {
    width: calc(${ tokens.width.container.m } - ${ tokens.spaces.l * 2 }rem);
  }

  @media screen and (min-width: ${ tokens.breakPoints.l }px) {
    width: calc(${ tokens.width.container.l } - ${ tokens.spaces.l * 2 }rem);
  }
`

const element = () => `
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const rules = `
  .break-parent-and-fit-window {
    ${ block() }

    &__element {
      ${ element() }
    }
  }
`

const defaultRules = rules

const Block = styled.div`
  ${ block() }
`

const Element = styled.div`
  ${ element() }
`

export {
  block,
  element,
  rules,
  defaultRules,
  Block,
  Element,
}
