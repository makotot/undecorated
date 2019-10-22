import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const block = () => `
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: ${ tokens.spaces.s }rem;
grid-column-gap: var(--spaces-s);
align-items: center;

&::before {
  display: block;
  content: '';
}
`

const rules = `
.with-left-ghost {
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
