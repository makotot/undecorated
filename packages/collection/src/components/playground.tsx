import React, { ReactNode } from 'react'
import styled, { createGlobalStyle, StyleSheetManager } from 'styled-components'
import { globalStyle } from './global-style'
import Frame, { FrameContextConsumer } from 'react-frame-component'

const StyledPlayground = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid rgba(0, 0, 255, 0.25);
  height: ${ ({ height }: { height?: string }) => height ? height : 'auto' };
`

const BackgroundGridGround = styled.div`
  background-color: rgba(250, 250, 250, 0.25);
`

const color = (alpha: number) => `rgba(0, 0, 255, ${ alpha })`

// ref: https://codepen.io/hyperstatic/pen/xHFop
const BackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  background-image:
    linear-gradient(0deg, transparent 24%,
      ${ color(0.1) } 25%,
      ${ color(0.1) } 26%,
      transparent 27%, transparent 74%,
      ${ color(0.6) } 75%, 
      ${ color(0.6) } 76%,
      transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, 
      ${ color(0.1) } 25%, 
      ${ color(0.1)} 26%,
      transparent 27%, transparent 74%, 
      ${ color(0.6) } 75%, 
      ${ color(0.6) } 76%,
      transparent 77%, transparent);
  background-size: 1rem 1rem;
`

const StyledFrame = styled(Frame)`
  width: 100%;
  height: 10rem;
  border: 1px solid #ccc;
`

const Playground = ({ children, height }: { children: ReactNode, height?: string }) => (
  <StyledPlayground height={ height }>
    <BackgroundGridGround>
      <BackgroundGrid />
      { children }
    </BackgroundGridGround>
  </StyledPlayground>
)

interface FramePlaygroundProps {
  children: ReactNode
  style: string
}

const FramePlayground: React.SFC<FramePlaygroundProps> = ({ children, style }) => {
  const GlobalStyle = createGlobalStyle`
    ${ globalStyle }
    ${ style }
  `

  return (
    <StyledFrame>
      <FrameContextConsumer>
        {
          ({ document }: { document: any }) => {
            return(
              <>
                <StyleSheetManager target={ document.head }>
                  <>
                    <GlobalStyle />
                    <Playground height="100vh">{ children }</Playground>
                  </>
                </StyleSheetManager>
              </>
            )
          }
        }
      </FrameContextConsumer>
    </StyledFrame>
  )
}

export {
  Playground,
  FramePlayground,
}
