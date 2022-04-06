import styled from "styled-components";

export const MainSection = styled.div`
  padding: 6vh 0 8vh;
  box-sizing: border-box;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a6dff;

  * {
    color: #ffffff;
  }

  p {
    font-family: "Pacifico";
  }

  img {
    height: 50%;
    width: 55%;
  }
`;

export const Logo = styled.h1`
  font-family: "Pacifico";
  font-size: 3.5vh;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 8.5vh;
  margin-bottom: 1.5vh;
`;

export const Desc = styled.div`
  font-weight: 500;
  font-size: 1.4vh;
  line-height: 2vh;
  text-align: center;
  margin-bottom: 2.5vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 16.5vw;
  height: 4.4vh;
  border: 1px solid #ffffff;
  border-radius: 30px;
  margin-bottom: 30px;
  background: #1a6dff;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 1.7vh;
  line-height: 4.4vh;
  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #1a6dff;
  }
`;

export const Team = styled.div`
  font-family: "Pacifico";
  margin-top: 13vh;
`;
