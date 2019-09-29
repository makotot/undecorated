import styled from 'styled-components'

const block = () => `
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
`

const rules = `
  .equal-col {
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
