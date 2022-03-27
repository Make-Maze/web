import styled from "styled-components";

export const Header = styled.header`
  width: 100vw;
  height: 55px;
  font-size: 16px;
  background-color: #ffffff;
  z-index: 2;
  box-shadow: 1px 0 10px #1a6dff;
  position: fixed;
  font-size: 16px;
  box-sizing: border-box;
  a {
    margin-right: 50px;
  }
`;

export const Container = styled.div`
  width: 80vw;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  font-family: "Pacifico";
  font-weight: 400;
  font-size: 30px;
  line-height: 51px;
  color: #1a6dff;
`;

export const LogOutBtn = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  background: #1a6dff;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;
`;
