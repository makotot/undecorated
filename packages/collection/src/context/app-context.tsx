import React, { ReactNode, useReducer, createContext } from 'react'
import * as WithLeftGhost from '../patterns/with-left-ghost'
import * as Centered from '../patterns/centered'
import * as GutterRow from '../patterns/gutter-row'
import * as GutterCol from '../patterns/gutter-col'
import * as Distributed from '../patterns/distributed'
import * as EqualCol from '../patterns/equal-col'
import * as StickyFooter from '../patterns/sticky-footer'
import * as InlineCentered from '../patterns/inline-centered'
import * as gutterInline from '../patterns/gutter-inline'
import * as FlowGrid from '../patterns/flow-grid'

const patterns: any[] = [
  Centered,
  GutterRow,
  GutterCol,
  Distributed,
  EqualCol,
  StickyFooter,
  InlineCentered,
  gutterInline,
  WithLeftGhost,
  FlowGrid,
]

const initialState: State = {
  patterns: patterns,
  type: 'styled-components',
  isOpened: false,
  isVisible: false,
  modalId: -1,
}

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'toggleDrawer':
      return {
        ...state,
        isOpened: action.isOpened,
      }
    case 'toggleModal':
      return {
        ...state,
        isVisible: action.isVisible,
        modalId: action.modalId,
      }
    default:
      return state
  }
}

const AppContext = createContext({} as Context)

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={ { state, dispatch } }>
      { children }
    </AppContext.Provider>
  )
}

export {
  AppContext,
  AppProvider,
}
