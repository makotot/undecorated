import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const block = () => `
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media screen and (min-width: ${ tokens.breakPoints.m }px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Block = styled.div<{ size?: string }>`
  ${ block() }
`

const defaultRules = `
  .flow-grid {
    ${ block() }
  }
`

const rules = `
  ${ defaultRules }
`

export {
  block,
  defaultRules,
  rules,
  Block,
}
