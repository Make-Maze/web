import styled from "styled-components";

export const Button = styled.div`
  display: inline-block;
  width: 90px;
  height: 40px;
  background: #1a6dff;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 500;
  line-height: 35px;
  color: #ffffff;
  text-align: center;
  border: 1px solid #1a6dff;
  box-sizing: border-box;

  &:hover {
    background-color: #fbfbfb;
    color: #1a6dff;
    border: 1px solid #1a6dff;
  }
`;
