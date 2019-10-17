import React from 'react'
import { ReactNode } from 'react';

interface DummyProps {
  bg?: string
}

const Dummy: React.SFC<DummyProps> = ({ bg }) => {
  const bgClassName = bg ? ` dummy--${ bg }` : ''

  return (
    <div className={ `dummy${ bgClassName }` }></div>
  )
}

const DummyInline: React.SFC = () => (
  <span className="dummy-inline">dummy</span>
)

interface DummyWrapperProps {
  children: ReactNode
}

const DummyWrapper: React.SFC<DummyWrapperProps> = ({ children }) => (
  <div className="dummy-wrapper">{ children }</div>
)

interface DummyBackgroundProps {
  bgColor: string,
}

const DummyBackground: React.SFC<DummyBackgroundProps> = ({ bgColor }) => (
  <div className="dummy-background" style={{
    backgroundColor: bgColor,
  }}></div>
)

export {
  Dummy,
  DummyInline,
  DummyWrapper,
  DummyBackground,
}
