import styled from 'styled-components'

export const MainSection = styled.div`
  padding: 20vh 7vw 20vw;
  * {
    margin: 0;
    overflow-x: hidden;
  }
`

export const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 300px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  p {
    padding-left: 130px;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .mainImg {
    position: absolute;
    width: 1000px;
    height: 528px;
    top: 20px;
    left: 800px;
  }
  hr {
    width: 5px;
  }
`

export const MapSection = styled.div`
  h1 {
    margin-top: 100px;
    font-size: 60px;
  }
`
