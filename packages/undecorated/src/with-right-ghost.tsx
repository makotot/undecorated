import styled from 'styled-components'
import { getSpaceSize } from 'undecorated-tokens'

const block = () => `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: ${ getSpaceSize('s') }rem;
align-items: center;

&::after {
  display: block;
  content: '';
}
`

const rules = `
.with-right-ghost {
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
