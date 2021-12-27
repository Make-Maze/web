import styled from 'styled-components'
import UserBackground from '../../Assets/UserBackground.png'

export const MainSection = styled.div`
  padding: 20vh 7vw 0vw;
  * {
    margin: 0;
    overflow-x: hidden;
  }
`

export const UserSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 150px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
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
  position: relative;
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
  p {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: 500px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px;
`
