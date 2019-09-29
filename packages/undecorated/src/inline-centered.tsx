import styled from 'styled-components'

const block = () => `
  display: block;
  text-align: center;
`

const rules = `
  .inline-centered {
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
