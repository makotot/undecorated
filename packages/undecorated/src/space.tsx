import styled from 'styled-components'
import { tokens } from 'undecorated-tokens'

const paddingByDirection = ({ size = tokens.spaces.m, direction = '' }: { size: string, direction: string }) => {
  switch (direction) {
    case 'top':
      return `
        padding-top: ${ size }rem;
      `
    case 'left':
      return `
        padding-left: ${ size }rem;
      `
    case 'right':
      return `
        padding-right: ${ size }rem;
      `
    case 'bottom':
      return `
        padding-bottom: ${ size }rem;
      `
    case 'vertical':
      return `
        padding-top: ${ size }rem;
        padding-bottom: ${ size }rem;
      `
    case 'horizontal':
      return `
        padding-left: ${ size }rem;
        padding-right: ${ size }rem;
      `
    default:
      return `
        padding: ${ size }rem;
      `
  }
}

const block = ({ size = tokens.spaces.m, direction = '' }: { size: string, direction: string }) => `
  ${ paddingByDirection({ size, direction }) }
`

const directions = ['top', 'left', 'right', 'bottom', 'vertical', 'horizontal', '']
const generateBlockRules = () => {
  return Object.keys(tokens.spaces).map((space) => {
    return directions.map((dir) => (
      `
        .space-${ space }${ dir ? `-${ dir }` : '' } {
          ${ paddingByDirection({ size: tokens.spaces[space], direction: dir }) }
        }
      `
    )).join('')
  }).join('')
}

const Block = styled.div<{ size?: string, direction: string }>`
  ${ ({ size = tokens.spaces.m, direction = '' }) => block({ size , direction }) }
`

const defaultRules = `
  .space {
    ${ block({ size: tokens.spaces.m, direction: '' }) }
  }
`

const rules = `
  ${ defaultRules }
  ${ generateBlockRules() }
`

export {
  block,
  rules,
  defaultRules,
  Block,
}
