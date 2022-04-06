import styled from "styled-components";

export const Footer = styled.div`
  height: 300px;
  box-sizing: border-box;
  margin-top: 50px;
  img {
    width: 40px;
    height: 40px;
  }
  border-top: 1px solid #f1f1f1;
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  margin: 50px auto 0;
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
