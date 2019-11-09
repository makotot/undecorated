import styled from 'styled-components'

const block = () => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

interface elementProps {
  at: 'left' | 'right'
}

const element = ({ at }: elementProps) => `
  margin-${ at === 'left' ? 'right' : 'left' }: auto;
`

const rules = `
  .isolated {
    ${ block() }
  }

  .isolated__element-left {
    ${ element({ at: 'left' }) }
  }

  .isolated__element-right {
    ${ element({ at: 'right' }) }
  }
`

const defaultRules = rules

const Block = styled.div`
  ${ block() }
`

const Element = styled.div<elementProps>`
  ${ ({ at }) => element({ at }) }
`

export {
  block,
  element,
  rules,
  defaultRules,
  Block,
  Element,
}
