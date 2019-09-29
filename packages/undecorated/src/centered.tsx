import styled from 'styled-components'

const block = () => `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const rules = `
  .centered {
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
