import styled from 'styled-components'

const block = () => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const rules = `
  .distributed {
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
