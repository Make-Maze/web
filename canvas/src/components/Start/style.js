import styled from "styled-components";

export const MainSection = styled.div`
  padding: 70px 0 90px;
  box-sizing: border-box;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a6dff;
  .logo {
    width: 239px;
    height: 67px;
  }
  * {
    overflow: hidden;
    color: #ffffff;
  }
  p {
    font-family: "Pacifico";
  }
`;

export const Logo = styled.h1`
  font-family: "Pacifico";
  font-size: 40px;
  line-height: 67px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 100px;
  line-height: 120px;
  margin-bottom: 20px;
`;

export const Desc = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 170px;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 30px;
  margin-bottom: 30px;
  background: #1a6dff;
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 48px;

  cursor: pointer;

  &:hover {
    background: #ffffff;
    color: #1a6dff;
  }

  a:hover {
    color: #1a6dff;
  }
`;

export const Team = styled.div`
  font-family: "Pacifico";
  margin-top: 150px;
`;
