import styled from 'styled-components'
import { spaces, getSpaceSize } from 'undecorated-tokens'

const inner = (size: string = 'm') => `
  display: flex;
  flex-wrap: wrap;
  margin-right: -${ getSpaceSize(size) }rem;
  margin-right: calc(var(--spaces-${ size }) * -1);
  margin-bottom: -${ getSpaceSize(size) }rem;
  margin-bottom: calc(var(--spaces-${ size }) * -1);
`

const item = (size: string = 'm') => `
  margin-right: ${ getSpaceSize(size) }rem;
  margin-right: var(--spaces-${ size });
  margin-bottom: ${ getSpaceSize(size) }rem;
  margin-bottom: var(--spaces-${ size });
`

const element = {
  inner,
  item,
}

const Item = styled.div`
  ${ element.item() }
`

interface InnerProps {
  size?: string,
}

const Inner = styled.div<InnerProps>`
  ${ element.inner() }

  & > ${ Item } + ${ Item } {
    ${ props => element.item(props.size) }
  }
`

const Element = {
  Inner,
  Item,
}

const block = () => `
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
`

const Block = styled.div`
  ${ block() }
`
const generateElementRules = () => {
  return Object.keys(spaces).map((space) => {
    return `
      .gutter-inline__inner--${ space } > .gutter-inline__item {
        ${ element.item(space) }
      }
    `
  })
}

const defaultRules = `
  .gutter-inline {
    ${ block() }
  }

  .gutter-inline__inner {
    ${ element.inner() }
  }

  .gutter-inline__inner > .gutter-inline__item {
    ${ element.item() }
  }
`

const rules = `
  ${ defaultRules }
  ${ generateElementRules() }
`

export {
  block,
  element,
  rules,
  defaultRules,
  Block,
  Element,
}
