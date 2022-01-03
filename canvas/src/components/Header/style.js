import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  height: 55px;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: 1px 0 10px rgb(158 204 147/ 50%);
  position: fixed;
  a {
    margin-left: 50px;
  }

  a:hover {
    color: #9ecc93;
  }
  .logo {
    height: 55px;
    margin-left: 10vw;
    margin-top: 10px;
  }
  span {
    margin: 0 10vw 0 50px;
    cursor: pointer;
  }
`
