import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { toast } from "react-toastify";
import { Liked, Profile } from "../../Atoms";
import { useRecoilState } from "recoil";
const Share = () => {
  const [shared, setShared] = useState([]); // 공유하기
  const [liked, setLiked] = useRecoilState(Liked);
  const [profile, setProfile] = useRecoilState(Profile);

  // 모든 맵 조회
  useEffect(() => {
    axios.get("/map").then((res) => {
      setShared(res.data);
    });
  }, []);

  // 중복 제거 체크 함수
  function isMyMap(curId) {
    return liked
      .filter((item) => {
        if (item.mapId === curId) {
          return false;
        }
        return true;
      })
      .map((v) => {
        return v;
      }).length;
  }

  const TrySave = (element) => {
    // 나중에 자신이 만든 맵 예외처리 해야함
    if (isMyMap(element.mapId) !== liked.length) {
      toast.error("이미 저장된 맵입니다.");
    } else {
      axios({
        url: "like/add",
        method: "post",
        data: {
          googleId: profile.password,
          name: profile.name,
          email: profile.email,
          img: profile.img,
        },
      })
        .then((res) => {
          setLiked(
            liked.concat({
              ...element,
              ...res.data,
            }),
          );
          toast.success("저장 완료");
        })
        .catch((err) => {
          console.log(err);
          toast.success("저장 실패");
        });
    }
  };

  return (
    <>
      <S.MainSection>
        <h1>
          다른 사람들의 <br />
          <S.Green> 미로</S.Green>를 체험해봐요.
        </h1>
        <hr />

        <S.MapSection>
          {shared.length === 0 ? (
            <p className="noShare">공유된 미로가 없습니다.</p>
          ) : (
            shared.map((element, i) => (
              <div key={i}>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <p className="mapId">mapId : {element.mapId}</p>
                  <S.ButtonWrapper>
                    <button onClick={TrySave(element)}>저장하기</button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </div>
            ))
          )}
        </S.MapSection>
      </S.MainSection>
    </>
  );
};

export default Share;
