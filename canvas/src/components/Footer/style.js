import styled from "styled-components";

export const Footer = styled.div`
  width: 100vw;
  height: 300px;
  overflow: hidden;
  box-sizing: border-box;
  hr {
    background: #c4c4c4;
    margin-bottom: 50px;
  }

  img {
    width: 40px;
    height: 40px;
  }
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export const TeamName = styled.div`
  span {
    font-family: "Pacifico";
    color: #1a6dff;
  }
  font-size: 20px;
  margin-bottom: 20px;
`;

export const TextSection = styled.div`
  display: flex;
`;

export const Text = styled.div`
  margin-right: 50px;
  font-size: 16px;
  div {
    margin-bottom: 20px;
  }
`;
