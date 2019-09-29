import styled from 'styled-components'
import { spaces, getSpaceSize } from 'undecorated-tokens'

const block = () => `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`

const element = (size: string = 'm') => `
  margin-left: ${ getSpaceSize(size) }rem;
`

const Element = styled.div``

interface BlockProps {
  size?: string,
}

const Block = styled.div<BlockProps>`
  ${ () => block() }

  & > ${ Element } + ${ Element } {
    ${ props => element(props.size) }
  }
`

const generateElementRules = () => {
  return Object.keys(spaces).map((space) => {
    return `
      .gutter-col--${ space } > .gutter-col__item + .gutter-col__item {
        ${ element(space) }
      }
    `
  })
}

const defaultRules = `
  .gutter-col {
    ${ block() }
  }

  .gutter-col > .gutter-col__item + .gutter-col__item {
    ${ element() }
  }
`

const rules = `
  ${ defaultRules }
  ${ generateElementRules() }
`

export {
  block,
  element,
  defaultRules,
  rules,
  Block,
  Element,
}
