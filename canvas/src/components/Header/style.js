import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  height: 55px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  background-color: rgba(196, 196, 196, 0.31);
  a:hover {
    color: #16780d;
  }
  a {
    margin-left: 50px;
  }

  span {
    margin: 50px;
    cursor: pointer;
  }
`
