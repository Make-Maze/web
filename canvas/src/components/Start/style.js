import styled from 'styled-components'

export const MainSection = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  * {
    overflow: hidden;
  }
  h1 {
    padding: 10vh 7vw 10px 7vw;
    color: black;
    font-size: 80px;
    text-align: center;
  }
  hr {
    width: 45%;
    margin: 10px auto;
  }
  .footerImg {
    width: 100%;
  }
`
export const Green = styled.span`
  color: #9ecc93;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .googleLogin {
    width: 200px;
    height: 40px;
    margin-bottom: 20px;
  }
`
export const Text = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`
export const PlayBtn = styled.div`
  text-align: center;
  padding-bottom: 100px;
  font-size: 20px;
  & :hover {
    color: #9ecc93;
  }
`
