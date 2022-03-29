import styled from "styled-components";

export const MainSection = styled.div`
  padding: 150px 10vw 0vw;
  background-color: #fbfbfb;
  * {
    margin: 0;
    overflow-x: hidden;
  }
  h1 {
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #545a5f;
  }
`;

export const MapSection = styled.div`
  overflow: hidden;
  margin-top: 100px;
  .noShare {
    height: 50vh;
    text-align: center;
    font-family: "appleM";
    font-size: 24px;
    margin: 100px;
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ItemSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 20vw;
  * {
    overflow: hidden;
  }

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
