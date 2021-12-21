import styled from 'styled-components'

export const MainSection = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  h1 {
    padding: 15vh 7vw 0px 7vw;
    margin: 0;
    color: black;
    font-size: 80px;
    text-align: center;
  }
  hr {
    width: 45%;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`
export const Green = styled.span`
  color: #16780d;
`
export const Container = styled.div`
  display: flex;
`
export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 50%;
`
export const Text = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'AppleM';
`

export const LoginBtn = styled.div`
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 100px;
  border: 1px solid rgba(15, 13, 13, 0.3);
  font-size: 20px;
  cursor: pointer;
`
