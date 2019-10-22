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
  bgColor?: string,
  height?: string,
}

const DummyBackground: React.SFC<DummyBackgroundProps> = ({ bgColor, height }) => (
  <div className="dummy-background" style={{
    backgroundColor: bgColor,
    height,
  }}></div>
)

export {
  Dummy,
  DummyInline,
  DummyWrapper,
  DummyBackground,
}
