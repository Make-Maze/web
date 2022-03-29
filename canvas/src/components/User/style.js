import styled from "styled-components";

export const MainSection = styled.div`
  background-color: #fbfbfb;
  * {
    margin: 0;
  }
`;

export const UserSection = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 35px;
  }
  border-bottom: 1px solid #f1f1f1;
`;

export const ChoiceSection = styled.div`
  display: flex;
  width: 70vw;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export const Choice = styled.span`
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => (props.color ? "#1a6dff" : "black")};
  cursor: pointer;
`;

export const Container = styled.div`
  padding: 80px 10vw;
  h1 {
    margin-top: 100px;
    font-size: 60px;
  }

  .noSave {
    height: 50vh;
    text-align: center;
    font-family: "appleM";
    font-size: 24px;
    margin: 100px;
  }
`;

export const MapSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const ItemSection = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
  width: 25vw;
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
