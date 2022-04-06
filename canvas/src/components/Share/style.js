import styled from "styled-components";

export const MainSection = styled.div`
  padding: 150px 10vw 0vw;
  background-color: #fbfbfb;
  * {
    margin: 0;
  }
  h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #545a5f;
  }
`;

export const MapSection = styled.div`
  margin-top: 100px;
  .noMap {
    margin-top: 100px;
    height: 50vh;
    text-align: center;
    font-family: "appleM";
    font-size: 24px;
    width: 80vw;
    color: #1a6dff;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
`;

export const ItemSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 20vw;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-bottom: 50px;
  }
`;

export const Desc = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  height: 100px;
  line-height: 28px;
  p {
    font-size: 20px;
    text-align: center;
  }
`;
