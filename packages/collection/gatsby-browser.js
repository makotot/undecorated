import React from 'react'
import { AppProvider } from './src/context/app-context'

export const wrapRootElement = ({ element }) => <AppProvider>{ element }</AppProvider>
