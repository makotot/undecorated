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


const rules = `
  .container {
    ${ block() }
  }
`

const defaultRules = rules

const Block = styled.div`
  ${ block() }
`

export {
  block,
  rules,
  defaultRules,
  Block,
}
