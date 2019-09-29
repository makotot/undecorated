import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useClipboard } from 'use-clipboard-copy'
import { FiCopy, FiCheck } from 'react-icons/fi'
import { GutterCol } from 'undecorated'

const CodeBody = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875rem;
`

const CodeButtonFrame = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
`

const CopyButton = styled.button`
  padding: 0.5rem;
  border: 0;
  background-color: #fff;
  color: #444;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #444;
    color: #fff;
  }
`

const Copied = styled(GutterCol.Block)`
  align-items: center;
  padding: 0.5rem;
  border: 0;
  background-color: #fff;
  color: #3c59ff;
  font-size: 1rem;
`

const CopiedItem = styled(GutterCol.Element)`
  display: flex;
`

interface CodeProps {
  code?: string,
  body: React.ReactNode,
}

const Code: React.SFC<CodeProps> = ({ code, body }) => {
  const clipboard = useClipboard({
    copiedTimeout: 3000,
  })

  const copy = useCallback(() => {
    clipboard.copy(code)
  }, [clipboard.copy, code])

  return (
    <>
      <CodeBody>
        {
          code
          &&
          <CodeButtonFrame>
            {
              clipboard.copied
              ?
                <Copied size="xs">
                  <CopiedItem>
                    <FiCheck />
                  </CopiedItem>
                  <CopiedItem>
                    Copied!
                  </CopiedItem>
                </Copied>
              :
                <CopyButton onClick={ copy }>
                  <FiCopy />
                </CopyButton>
            }
          </CodeButtonFrame>
        }
        { body }
      </CodeBody>
    </>
  )
}

export {
  Code,
}
