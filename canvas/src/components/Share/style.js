import styled from 'styled-components'
export const MainSection = styled.div`
  padding: 20vh 7vw 0vw;
  * {
    margin: 0;
    overflow-x: hidden;
  }
  h1 {
    font-size: 60px;
    margin-bottom: 10px;
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`
export const Green = styled.span`
  color: #9ecc93;
`

export const MapSection = styled.div`
  overflow: hidden;
  h1 {
    margin-top: 100px;
    font-size: 60px;
  }

  .noShare {
    height: 50vh;
    text-align: center;
    font-family: 'appleM';
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
    font-size: 20px;
    text-align: center;
    margin-top: 20px;
  }
  .title {
    color: #9ecc93;
    text-align: center;
    font-size: 28px;
    margin: 5px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
