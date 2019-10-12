import styled from 'styled-components'

const block = () => `
  display: block;
  text-align: right;
`

const rules = `
  .inline-right-side {
    ${ block() }
  }
`

const defaultRules = rules

const Block = styled.div`
  ${ block() }
`

export {
  block,
  defaultRules,
  rules,
  Block,
}
