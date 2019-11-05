import styled from 'styled-components'

const block = ({ edge }: { edge: string }) => `
  position: fixed;
  ${ edge }: 0;
`

const Block = styled.div<{ edge: string }>`
  ${ ({ edge }) => block({ edge }) }
`

const edges = ['top', 'left', 'right', 'bottom']

const generateBlockRules = (edgeItems: string[]) => {
  return edgeItems.map((edge) => (
    `
      .fixed-to-edge-${ edge } {
        ${ block({ edge }) }
      }
    `
  )).join('')
}

const defaultRules = `
  ${ generateBlockRules([edges[0]]) }
`

const rules = `
  ${ generateBlockRules(edges) }
`

export {
  block,
  rules,
  defaultRules,
  Block,
}
