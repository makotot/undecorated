interface State {
  patterns: any[];
  type: 'css' | 'styled-components';
  isOpened: boolean;
  isVisible: boolean;
  modalId: number;
}

type Action =
  | { type: 'toggleDrawer', isOpened: boolean }
  | { type: 'toggleModal', isVisible: boolean, modalId: number }

type Dispatch = (action: Action) => void

type Context = {
  state: State,
  dispatch: Dispatch,
}

interface AppProviderProps {
  children: JSX.Element[] | JSX.Element
}

declare module 'react-syntax-highlighter'
declare module 'react-syntax-highlighter/dist/esm/styles/hljs'
declare module 'react-frame-component'
