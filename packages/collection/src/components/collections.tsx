import React, { useContext } from "react"
import ReactDOMServer from 'react-dom/server'
import { clearAllBodyScrollLocks } from 'body-scroll-lock'
import { FiX } from 'react-icons/fi'
import pretty from 'pretty'
import cssbeautify from 'cssbeautify'
import { FlowGrid, GutterRow } from 'undecorated'
import { AppContext } from '../context/app-context'
import { Example } from './example/example'
import { CloseButton } from './close-button'
import { Modal, ModalHead, ModalHeadTitle, ModalInner, ModalBody, Overlay } from './modal'
import { CodeTab } from './code-tab'

const Collections: React.SFC = () => {
  const { state, dispatch } = useContext(AppContext)
  const hide = () => {
    dispatch({
      type: 'toggleModal',
      isVisible: false,
      modalId: -1,
    })
    clearAllBodyScrollLocks()
  }

  const patterns = state.patterns.map((item: any, index: number) => (
    <Example
      key={ index }
      style={ item.defaultRules || item.rules }
      template={ item.template() }
      title={ item.docs.title }
      id={ item.docs.id }
      summary={ item.docs.summary }
      iframe={ item.docs.iframe }
      jsxTemplate={ item.jsxTemplate }
      index={ index }
    />
  ))
  const currentPattern = state.patterns[state.modalId]

  return (
    <>
      <GutterRow.Block>
        <GutterRow.Element>
          <FlowGrid.Block>{ patterns }</FlowGrid.Block>
        </GutterRow.Element>
      </GutterRow.Block>

      <Modal isVisible={ state.isVisible } id="js-modal">
        {
          state.modalId > -1
          &&
          <ModalInner>
            <ModalHead>
              <ModalHeadTitle>{ currentPattern.docs.title }</ModalHeadTitle>
              <CloseButton onClick={ hide }>
                <FiX />
              </CloseButton>
            </ModalHead>
            <ModalBody>
              <CodeTab
                groups={[
                  {
                    title: 'SCSS',
                    items: [
                      {
                        code: cssbeautify(currentPattern.defaultRules || currentPattern.rules),
                        lang: 'scss',
                      },
                      {
                        code: pretty(ReactDOMServer.renderToStaticMarkup(currentPattern.template())),
                        lang: 'markup',
                      },
                    ],
                  },
                  {
                    title: 'Styled Components',
                    items: [
                      {
                        code: currentPattern.jsxTemplate,
                        lang: 'jsx',
                      },
                    ],
                  },
                ]}
              >
              </CodeTab>
            </ModalBody>
          </ModalInner>
        }
      </Modal>
      <Overlay
        isVisible={ state.isVisible }
        onClick={ hide }
      />
    </>
  )
}

export {
  Collections,
}
