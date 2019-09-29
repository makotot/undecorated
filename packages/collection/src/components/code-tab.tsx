import React, { ReactNode, useState, MouseEvent } from 'react'
import { CodeBlock } from './code-block'
import styled from 'styled-components';
import { Language } from 'prism-react-renderer'

interface CodeTabNavLinkProps {
  active: boolean
  children: ReactNode
  onClick: (e: MouseEvent<HTMLAnchorElement>) => void,
}

const StyledCodeTabNavLink = styled.a`
  display: block;
  padding: 0.5rem;
  color: ${ (props: CodeTabNavLinkProps) => props.active ? '#222' : '#555' };
  border-bottom: 2px solid ${ (props: CodeTabNavLinkProps) => props.active ? '#222' : 'transparent' };
  font-weight: ${ (props: CodeTabNavLinkProps) => props.active ? 400 : 300 };
  text-decoration: none;
`

const CodeTabNavLink = (props: CodeTabNavLinkProps) => (
  <StyledCodeTabNavLink href="#" { ...props }>
    { props.children }
  </StyledCodeTabNavLink>
)


const CodeTabNavItem = styled.li`
`

const CodeTabNav = styled.ul`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #222;
`

const CodeTabBody = styled.div`
  margin-top: 1rem;
`

interface GroupItem {
  title: string,
  items: { code: string, lang: Language }[],
}

interface CodeTabProps {
  groups: GroupItem[],
}

const CodeTab: React.SFC<CodeTabProps> = ({ groups }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleActiveIndex = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setActiveIndex(Number(e.currentTarget.dataset.index))
  }

  return (
    <>
      <CodeTabNav>
        {
          groups.map((g, index) => (
            <CodeTabNavItem key={ index }>
              <CodeTabNavLink
                active={ index === activeIndex }
                onClick={ handleActiveIndex }
                data-index={ index }
              >
                { g.title }
              </CodeTabNavLink>
            </CodeTabNavItem>
          ))
        }
      </CodeTabNav>
      <CodeTabBody>
        {
          groups.map((g, index) => {
            if (index !== activeIndex) {
              return null
            }

            return g.items.map((item, i) => (
              <CodeBlock
                key={ i }
                code={ item.code }
                lang={ item.lang }
              />
            ))
          })
        }
      </CodeTabBody>
    </>
  )
}

export {
  CodeTab,
}
