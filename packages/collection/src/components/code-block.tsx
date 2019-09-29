import React from 'react'
import styled from 'styled-components'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import { Code } from './code'

const Pre = styled.pre`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem;
  min-height: 4rem;
`

const CodeBlock = ({ lang, code }: { lang: Language, code: string }) => {
  return (
    <Code
      code={ code }
      body={
        <Highlight { ...defaultProps } code={ code } language={ lang } theme={ theme }>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={ className } style={ style } data-body-scroll-lock-ignore="1">
              {
                tokens.map((line, i) => (
                  <div { ...getLineProps({ line, key: i }) }>
                    {
                      line.map((token, key) => (
                        <span { ...getTokenProps({ token, key }) } />
                      ))
                    }
                  </div>
                ))
              }
            </Pre>
          )}
        </Highlight>
      }
    />
  )
}

export {
  CodeBlock,
}
