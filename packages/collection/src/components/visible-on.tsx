import styled from 'styled-components'
import { breakPoints } from 'undecorated-tokens'

interface VisibleOnProps {
  from?: string,
  until?: string,
  size: string,
}

const VisibleOn = styled.div`
  display: ${ (props: VisibleOnProps) => props.from ? 'none' : 'block' };

  ${ (props: VisibleOnProps) => {
    const key = props.size

    return `@media screen and (${ props.from ? 'max' : 'min' }-width: ${ breakPoints[key] }px) {
      display: ${ props.from ? 'block' : 'none' };
    }`
  }}
`

export {
  VisibleOn,
}
