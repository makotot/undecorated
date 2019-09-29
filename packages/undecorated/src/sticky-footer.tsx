import styled from 'styled-components'

const block = () => `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const element = () => `
  margin-top: auto;
  margin-bottom: 0;
`

const rules = `
  .sticky-footer {
    ${ block() }
  }

  .sticky-footer__foot {
    ${ element() }
  }
`

const defaultRules = rules

const Block = styled.div`
  ${ block() }
`

const Element = styled.div`
  ${ element() }
`

export {
  block,
  element,
  rules,
  defaultRules,
  Block,
  Element,
}
