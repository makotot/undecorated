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
  grid-template-columns: var(--hory-grail-left-width) 1fr var(--hory-grail-right-width);
  grid-template-rows: var(--hory-grail-head-height) 1fr var(--hory-grail-foot-height);
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
    --hory-grail-left-width: 10vw;
    --hory-grail-right-width: 10vw;
    --hory-grail-head-height: 20vh;
    --hory-grail-foot-height: 10vh;

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
