import React, { ReactNode, ReactFragment, useContext } from 'react'
import { FiCode } from 'react-icons/fi'
import { createGlobalStyle } from 'styled-components'
import { GutterRow } from 'undecorated'
import { Playground, FramePlayground } from '../playground'
import { AppContext } from '../../context/app-context'
import { Wrapper } from './wrapper'
import { Heading } from './heading'
import { Summary } from './summary'
import { Body } from './body'
import { Foot, FootButton } from './foot'
import { disableBodyScroll } from 'body-scroll-lock'

interface ExampleProps {
  style: string
  template: any,
  title: string,
  id: string,
  summary: string,
  iframe: boolean,
  index: number,
  jsxTemplate: string,
}

const Example:React.SFC<ExampleProps> = ({
  style,
  template,
  title,
  id,
  summary,
  iframe = false,
  index,
}) => {
  const GlobalStyle = createGlobalStyle`
    ${ style }
  `
  const { state, dispatch } = useContext(AppContext)
  const show = () => {
    dispatch({
      type: 'toggleModal',
      isVisible: true,
      modalId: index,
    })
    disableBodyScroll(document.querySelector('#js-modal') as HTMLElement, {
      allowTouchMove: (el: HTMLElement | Element) => {
        while (el && el !== document.body) {
          if (el.getAttribute('body-scroll-lock-ignore')) {
            return true
          }
          el = el.parentNode as HTMLElement
        }
      },
    })
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Heading id={ id }>{ title }</Heading>
        <Body>
          <GutterRow.Block>
            <GutterRow.Element>
              <Summary>{ summary }</Summary>
            </GutterRow.Element>
            <GutterRow.Element>
              {
                iframe
                ?
                <FramePlayground style={ style }>{ template }</FramePlayground>
                :
                <Playground>{ template }</Playground>
              }
            </GutterRow.Element>
          </GutterRow.Block>
        </Body>
        <Foot>
          <FootButton
            onClick={ show }
          >
            <FiCode />&nbsp;Show Code
          </FootButton>
        </Foot>
      </Wrapper>
    </>
  )
}

export {
  Example,
}
