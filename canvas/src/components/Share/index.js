import React, { useEffect, useState } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { Liked, Profile } from "../../Atoms";
import { useRecoilState } from "recoil";
import Button from "../Button";
import like from "../../Api/like";
import map from "../../Api/map";

const Share = () => {
  const [shared, setShared] = useState([]); // 공유하기
  const [liked, setLiked] = useRecoilState(Liked);
  const [profile] = useRecoilState(Profile);
  // 모든 맵 조회
  useEffect(() => {
    map.AllMaps().then((res) => setShared(res.data));
    like.getLikes().then((res) => setLiked(res.data));
  }, [liked, setLiked]);

  // 중복 제거 체크 함수
  const isMyMap = (curId) => {
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
  };

  const TryLiked = async (element) => {
    // 나중에 자신이 만든 맵 예외처리 해야함
    if (isMyMap(element.mapId) !== liked.length) {
      toast.error("이미 저장된 맵입니다.");
    } else if (element.userName === profile.name) {
      toast.error("자신이 만든 맵은 저장할 수 없습니다.");
    } else {
      await like.add(element.mapId).then(() => toast.success("저장 완료"));
    }
  };

  return (
    <S.MainSection>
      <h1>다른 사람의 미로</h1>
      <S.MapSection>
        {shared.length === 0 ? (
          <p className="noMap">공유된 미로가 없습니다.</p>
        ) : (
          shared.map((element, i) => (
            <span key={i}>
              <S.ItemSection>
                <img src={element.img} alt="" />
                <S.Desc>
                  {element.userName}님이 제작한 <br />
                  <span>{element.mapName}</span>
                </S.Desc>
                <Button content="저장하기" onClick={() => TryLiked(element)} />
              </S.ItemSection>
            </span>
          ))
        )}
      </S.MapSection>
    </S.MainSection>
  );
};

export default Share;
