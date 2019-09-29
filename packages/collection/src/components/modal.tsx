import styled from 'styled-components'
import { breakPoints } from 'undecorated-tokens'

interface ModalProps {
  isVisible: boolean;
}

const Modal = styled.div`
  position: fixed;
  min-width: 80vw;
  max-width: 90vw;
  max-height: 90vh;
  top: 50%;
  left: 50%;
  transition: all 0.3s ease;
  transform: translate(-50%, ${ (props: ModalProps) => props.isVisible ? '-50%' : '-200%' });
  opacity: ${ (props: ModalProps) => props.isVisible ? 1 : 0 };
  background-color: #fff;
  z-index: 10;

  @media screen and (min-width: ${ breakPoints.l }px) {
    max-width: 980px;
  }
`

const ModalHead = styled.header`
  display: flex;
  align-items: center;
`

const ModalHeadTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`

const ModalInner = styled.div`
  overflow: hidden;
  padding: 1rem;
`

const ModalBody = styled.div`
  max-height: 80vh;
  overflow-x: auto;
  overflow-scrolling: touch;
`

interface OverlayProps {
  isVisible: boolean
  onClick: () => void
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: ${ (props: OverlayProps) => props.isVisible ? 'block' : 'none' };
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 9;
`

export {
  Modal,
  ModalHead,
  ModalHeadTitle,
  ModalInner,
  ModalBody,
  Overlay,
}
