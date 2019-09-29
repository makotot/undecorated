import styled from 'styled-components'

interface LinkProps {
  active: boolean,
}

const Link = styled.a`
  display: block;
  padding: 0.5rem;
  background-color: ${ (props: LinkProps) => props.active ? '#3957ff' : '#fff' };
  color: ${ (props: LinkProps) => props.active ? '#fff' : '#3957ff' };
  border: 1px solid #3957ff;
  text-decoration: none;

  &:hover {
    background-color: #1f4fff;
    color: #fff;
  }
`

export {
  Link,
}