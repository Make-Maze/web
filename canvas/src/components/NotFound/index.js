import React from "react";
import * as S from "./style";
import notFound from "../../Assets/notFound.png";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <S.MainSection>
      <div>
        <img src={notFound} alt="" />
        <p>
          요청하신 페이지를 찾을 수 없습니다. <br /> 주소가 정확한지
          확인해주세요.
        </p>
        <div className="goBack"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전 페이지로 돌아가기
        </div>
      </div>
    </S.MainSection>
  );
};

export default NotFound;
