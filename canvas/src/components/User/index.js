import React, { useState, useEffect } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { Liked, Profile } from "../../Atoms";
import Button from "../Button";
import map from "../../Api/map";
import like from "../../Api/like";

const User = () => {
  const [saved, setSaved] = useState([]); // 저장하기
  const [liked, setLiked] = useRecoilState(Liked);
  const [profile] = useRecoilState(Profile);
  const [choice, setChoice] = useState("made");
  const [saveColor, setSaveColor] = useState(true);
  const [likeColor, setLikeColor] = useState(false);
  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    map.getMaps().then((res) => setSaved(res.data));
    // 현재 로그인 된 유저의 Like를 가져옴
    like.getLikes().then((res) => setLiked(res.data));
  }, []);

  const TryDelete = (element, method) => {
    // 사용자가 직접 만든 미로 지우기
    if (method === "saved") {
      map.delete(element.mapId).then((res) => {
        setSaved(saved.filter((mapData) => mapData.mapId !== element.mapId));
        toast.success("삭제 완료");
      });
    } else {
      // 저장된 맵 아이디가 likeId인 맵 삭제
      like.delete(element.likeId).then(() => {
        setLiked(liked.filter((mapData) => mapData.mapId !== element.mapId));
        toast.success("삭제 완료");
      });
    }
  };

  return (
    <S.MainSection>
      <S.UserSection>
        <img src={profile.imageUrl} alt="" />
        <p>{profile.name}</p>
      </S.UserSection>
      <S.Container>
        <S.ChoiceSection>
          <S.Choice
            color={saveColor}
            onClick={() => {
              setChoice("made");
              setSaveColor(true);
              setLikeColor(false);
            }}
          >
            제작한 미로
          </S.Choice>
          <S.Choice
            color={likeColor}
            onClick={() => {
              setChoice("saved");
              setSaveColor(false);
              setLikeColor(true);
            }}
          >
            저장한 미로
          </S.Choice>
        </S.ChoiceSection>

        {choice === "made" ? (
          <S.MapSection>
            {saved.length === 0 ? (
              <p className="noMap">제작한 미로가 없습니다.</p>
            ) : (
              saved.map((element, i) => (
                <span key={i}>
                  <S.ItemSection>
                    <img src={element.img} alt="" />
                    <S.Desc>
                      {element.userName}님이 제작한 <br />
                      <span>{element.mapName}</span>
                    </S.Desc>
                    <Button
                      content="삭제하기"
                      onClick={() => TryDelete(element, "saved")}
                    />
                  </S.ItemSection>
                </span>
              ))
            )}
          </S.MapSection>
        ) : (
          <S.MapSection>
            {liked.length === 0 ? (
              <p className="noMap">저장한 미로가 없습니다.</p>
            ) : (
              liked.map((element, i) => (
                <span key={i}>
                  <S.ItemSection>
                    <img src={element.img} alt="" />
                    <S.Desc>
                      {element.userName}님이 제작한 <br />
                      <span>{element.mapName}</span>
                    </S.Desc>
                    <Button
                      content="삭제하기"
                      onClick={() => TryDelete(element, "liked")}
                    />
                  </S.ItemSection>
                </span>
              ))
            )}
          </S.MapSection>
        )}
      </S.Container>
    </S.MainSection>
  );
};

export default User;
