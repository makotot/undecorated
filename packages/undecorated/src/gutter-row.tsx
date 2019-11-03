import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const block = () => `
  display: flex;
  flex-direction: column;
`

const element = (size: string = 'm') => `
  margin-top: ${ tokens.spaces[size] }rem;
`

const Element = styled.div`
`

const Block = styled.div<{ size?: string }>`
  ${ block() }

  & > ${ Element } + ${ Element } {
    ${ props => element(props.size) }
  }
`

const generateElementRules = () => {
  return Object.keys(tokens.spaces).map((space) => {
    return `
      .gutter-row--${ space } > .gutter-row__item + .gutter-row__item {
        ${ element(space) }
      }
    `
  })
}

const defaultRules = `
  .gutter-row {
    ${ block() }
  }

  .gutter-row > .gutter-row__item + .gutter-row__item {
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
