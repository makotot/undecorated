import { createGlobalStyle } from 'styled-components'

const globalStyle = `
  * {
    box-sizing: border-box;
  }

  *::before, *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  body {
    width: 100%;
    margin: 0;
    font-family: 'Source Sans Pro', -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;
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
`

const GlobalStyle = createGlobalStyle`${ globalStyle }`

export {
  GlobalStyle,
  globalStyle,
}
