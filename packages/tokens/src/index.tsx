type tokensType = {
  breakPoints: {
    [key: string]: any
  },
  spaces: {
    [key: string]: any
  },
  width: {
    [key: string]: any
  }
}

const tokens: tokensType = {
  breakPoints: {
    s: 640,
    m: 768,
    l: 1024,
  },
  spaces: {
    xs: 0.25,
    s: 0.5,
    m: 1,
    l: 1.5,
    xl: 2,
    xxl: 2.5,
    xxxl: 3,
  },
  width: {
    container: {
      s: '100vw',
      m: '640px',
      l: '960px',
    },
  },
}

export {
  tokens,
}
