import styled from 'styled-components'

const head = () => `
  grid-area: horyGrailHead;
`

const body = () => `
  grid-area: horyGrailBody;
`

const left = () => `
  grid-area: horyGrailLeft;
`

const right = () => `
  grid-area: horyGrailRight;
`

const foot = () => `
  grid-area: horyGrailFoot;
`

const element = {
  head,
  body,
  left,
  right,
  foot,
}

const Head = styled.div`
  ${ head() }
`

const Body = styled.div`
  ${ body() }
`

const Left = styled.div`
  ${ left() }
`

const Right = styled.div`
  ${ right() }
`

const Foot = styled.div`
  ${ foot() }
`

const Element = {
  Head,
  Body,
  Left,
  Right,
  Foot,
}

const block = () => `
  display: grid;
  min-height: 100vh;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'horyGrailHead horyGrailHead horyGrailHead'
    'horyGrailLeft horyGrailBody horyGrailRight'
    'horyGrailFoot horyGrailFoot horyGrailFoot';
`

const Block = styled.div`
  ${ block() }
`

const defaultRules = `
  .hory-grail {
    ${ block() }
  }

  .hory-grail__head {
    ${ element.head() }
  }

  .hory-grail__body {
    ${ element.body() }
  }

  .hory-grail__left {
    ${ element.left() }
  }

  .hory-grail__right {
    ${ element.right() }
  }

  .hory-grail__foot {
    ${ element.foot() }
  }
`

const rules = `
  ${ defaultRules }
`

export {
  block,
  element,
  Block,
  Element,
  defaultRules,
  rules,
}
