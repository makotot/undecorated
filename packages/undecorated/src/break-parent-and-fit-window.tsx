import styled from 'styled-components'

const block = () => `
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const rules = `
  .break-parent-and-fit-window {
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
