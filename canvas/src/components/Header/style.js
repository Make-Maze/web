import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: flex-end;
  a:hover {
    color: #ff8f8f;
  }
  a {
    margin-left: 50px;
  }
  a:last-child {
    margin-right: 50px;
  }
`
