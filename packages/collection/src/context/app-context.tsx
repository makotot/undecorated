import React, { ReactNode, useReducer, createContext } from 'react'
import * as WithLeftGhost from '../patterns/with-left-ghost'
import * as WithRightGhost from '../patterns/with-right-ghost'
import * as Centered from '../patterns/centered'
import * as GutterRow from '../patterns/gutter-row'
import * as GutterCol from '../patterns/gutter-col'
import * as IsolatedLeftEnd from '../patterns/isorated-left-end'
import * as IsolatedRightEnd from '../patterns/isorated-right-end'
import * as Distributed from '../patterns/distributed'
import * as EqualCol from '../patterns/equal-col'
import * as StickyFooter from '../patterns/sticky-footer'
import * as InlineCentered from '../patterns/inline-centered'
import * as InlineRightSide from '../patterns/inline-right-side'
import * as gutterInline from '../patterns/gutter-inline'
import * as FlowGrid from '../patterns/flow-grid'
import * as HoryGrail from '../patterns/hory-grail'
import * as MediaObject from '../patterns/media-object'
import * as BreakParentAndFitWindow from '../patterns/break-parent-and-fit-window'
import * as Space from '../patterns/space'

const patterns: any[] = [
  Centered,
  GutterRow,
  GutterCol,
  Distributed,
  IsolatedLeftEnd,
  IsolatedRightEnd,
  EqualCol,
  StickyFooter,
  InlineCentered,
  InlineRightSide,
  gutterInline,
  WithLeftGhost,
  WithRightGhost,
  FlowGrid,
  HoryGrail,
  MediaObject,
  BreakParentAndFitWindow,
  Space,
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
