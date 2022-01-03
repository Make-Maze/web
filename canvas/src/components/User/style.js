import styled from 'styled-components'
import UserBackground from '../../Assets/UserBackground.png'

export const MainSection = styled.div`
  padding: 20vh 7vw 0vw;
  * {
    margin: 0;
    overflow-x: hidden;
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`
export const Green = styled.span`
  color: #16780d;
`

export const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 150px;

  p {
    font-size: 24px;
    margin: 0 20px 10px 150px;
  }
  .mainImg {
    width: 600px;
    height: 528px;
  }
  hr {
    width: 5px;
  }
`

export const MapSection = styled.div`
  overflow: hidden;
  h1 {
    margin-top: 100px;
    font-size: 60px;
  }

  .noSave {
    height: 50vh;
    text-align: center;
    font-family: 'appleM';
    color: #ff8f8f;
    font-size: 24px;
    margin: 100px;
  }
`

export const ItemSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: 700px;
  width: 300px;
  margin: 70px 200px 0 0;
  * {
    overflow: hidden;
  }
  p {
    font-size: 24px;
    text-align: center;
    margin: 20px;
    height: 55px;
  }
  .title {
    color: #16780d;
    text-align: center;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
