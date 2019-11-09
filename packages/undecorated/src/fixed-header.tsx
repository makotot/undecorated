import styled from 'styled-components'

const block = () => `
  position: fixed;
  width: 100%;
  top: 0;
`

const Block = styled.div`
  ${ block() }
`

const defaultRules = `
  .fixed-hader {
    ${ block() }
  }
`

const rules = defaultRules

export {
  block,
  rules,
  defaultRules,
  Block,
}
