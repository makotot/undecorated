import { createGlobalStyle } from 'styled-components'
import { tokens } from 'undecorated-tokens'

const createSpaces = () => `
  ${
    Object.keys(tokens.spaces).map((space) => {
      return `--spaces-${ space }: ${ tokens.spaces[space] }rem;`
    }).join('')
  }
`

const globalStyle = `
  :root {
    --base-font-size: 16px;

    ${ createSpaces() }
  }

  * {
    box-sizing: border-box;
  }

  *::before, *::after {
    box-sizing: inherit;
  }

  html {
    font-size: var(--base-font-size);
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
    line-height: 1.25;
    background-color: #fff;
    color: #222;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    border: 0;
    cursor: pointer;
    -webkit-appearance: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  pre {
    margin: 0;
  }

  .dummy {
    display: block;
    padding: 2rem;
    background-color: rgba(190, 170, 255, 0.5);
    border: 2px solid #7e91ff;
  }

  .dummy-inline {
    display: inline;
    background-color: rgba(190, 170, 255, 0.5);
    color: #7e91ff;
    font-weight: bold;
    border: 0;
  }

  .dummy-wrapper {
    width:100%;
    height: 10rem;
  }

  .dummy-background {
    min-width: 10vw;
    min-height: 10vh;
  }
`

const GlobalStyle = createGlobalStyle`${ globalStyle }`

export {
  GlobalStyle,
  globalStyle,
}
