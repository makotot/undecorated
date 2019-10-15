import React, { ReactNode } from 'react'
import { GutterRow } from 'undecorated'
import { Link } from 'gatsby'

interface NavigationProps {
  children?: ReactNode,
}

const Navigation: React.SFC<NavigationProps> = ({ children }) => {
  return (
    <nav>
      <GutterRow.Block size="l">
        <GutterRow.Element>
          <Link to="/about/">About</Link>
        </GutterRow.Element>
      </GutterRow.Block>
    </nav>
  )
}

export { Navigation }
