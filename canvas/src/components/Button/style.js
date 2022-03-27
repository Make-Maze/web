import styled from "styled-components";

export const Button = styled.div`
  width: 100px;
  height: 45px;
  border: none;
  background: #1a6dff;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 500;
  line-height: 40px;
  color: #ffffff;
  text-align: center;

  &:hover {
    background-color: #fbfbfb;
    color: #1a6dff;
    border: 1px solid #1a6dff;
  }
`;
