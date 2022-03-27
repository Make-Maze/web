import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { toast } from "react-toastify";
import { Liked, Profile } from "../../Atoms";
import { useRecoilState } from "recoil";
import Button from "../Button";
const Share = () => {
  const [shared, setShared] = useState([]); // 공유하기
  const [liked, setLiked] = useRecoilState(Liked);
  const [profile, setProfile] = useRecoilState(Profile);

  // 모든 맵 조회
  useEffect(() => {
    axios.get("/map/getAllMaps").then((res) => {
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
    // 저장하기 기능이 안됨
    if (isMyMap(element.mapId) !== liked.length) {
      toast.error("이미 저장된 맵입니다.");
    } else if (element.userName === profile.userName) {
      toast.error("자신이 만든 맵은 저장할 수 없습니다.");
    } else {
      console.log(profile);
      axios({
        url: "/like/add",
        method: "POST",
        data: {
          password: profile.googleId,
          name: profile.name,
          email: profile.email,
          img: profile.imageUrl,
        },
      })
        .then((res) => {
          setLiked(
            liked.concat({
              ...element,
              ...res.data,
            }),
          );
          console.log(res);
          toast.success("저장 완료");
        })
        .catch((err) => {
          console.log(err);
          toast.error("저장 실패");
        });
    }
  };

  return (
    <S.MainSection>
      <h1>다른 사람의 미로</h1>

      <S.MapSection>
        {shared.length === 0 ? (
          <p className="noShare">공유된 미로가 없습니다.</p>
        ) : (
          shared.map((element, i) => (
            <span key={i}>
              <S.ItemSection>
                <img src={element.img} alt="" />
                <S.Desc>
                  {element.userName}님이 제작한 <br />
                  <span>{element.mapName}</span>
                </S.Desc>
                <Button content="저장하기" onClick={() => TrySave(element)} />
              </S.ItemSection>
            </span>
          ))
        )}
      </S.MapSection>
    </S.MainSection>
  );
};

export default Share;
