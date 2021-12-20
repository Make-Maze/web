import styled from 'styled-components'

export const MainSection = styled.div`
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  /* background-color: #ff8f8f; */
  h1 {
    padding: 20vh 7vw 0px;

    margin: 0;
    color: white;
    font-size: 80px;
    text-align: center;
    padding-bottom: 100px;
  }
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
  color: white;
  font-size: 36px;
  margin-bottom: 50px;
`
