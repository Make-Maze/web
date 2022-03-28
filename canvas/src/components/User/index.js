import React, { useState, useEffect } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import axios from "axios";
import { useRecoilState } from "recoil";
import { Liked, Profile } from "../../Atoms/";
import Button from "../Button";
import { useCookies } from "react-cookie";

const User = () => {
  const [saved, setSaved] = useState([]); // 저장하기
  const [liked, setLiked] = useRecoilState(Liked);
  const [profile, setProfile] = useRecoilState(Profile);
  const [choice, setChoice] = useState("made");
  const [saveColor, setSaveColor] = useState(true);
  const [likeColor, setLikeColor] = useState(false);
  // 구글 아이디가 gooleId 인 사용자의 Map 조회
  useEffect(() => {
    const getSaved = async () => {
      try {
        const res = await axios.get("map/getMaps");
        setSaved(res.data);
      } catch (e) {
        throw e;
      }
    };
    getSaved();
  }, []);

  // 현재 로그인 된 유저의 Like를 가져옴
  useEffect(() => {
    const getLiked = async () => {
      try {
        const res = await axios.get("/like/getLikes");
        setLiked(res.data);
      } catch (e) {
        throw e;
      }
    };
    getLiked();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/member/me");
        console.log(res);
        setProfile({
          googleId: res.data.password,
          name: res.data.name,
          email: res.data.email,
          imageUrl: res.data.img,
        });
      } catch (e) {
        throw e;
      }
    };
    getUser();
  }, []);

  console.log(profile);

  const TryDelete = (element, method) => {
    // 사용자가 직접 만든 미로 지우기
    if (method === "saved") {
      axios
        .delete(`/map/delete/${element.mapId}`)
        .then((res) => {
          setSaved(saved.filter((mapData) => mapData.mapId !== element.mapId));
          toast.success("삭제 완료");
        })
        .catch((err) => {
          console.log(err);
          toast.error("삭제 실패");
        });
    } else {
      // 저장된 맵 아이디가 likeId인 맵 삭제
      axios
        .delete(`/like/${element.LikeId}`)
        .then((res) => {
          setLiked(liked.filter((mapData) => mapData.mapId !== element.mapId));
          toast.success("삭제 완료");
        })
        .catch((err) => {
          console.log(err);
          toast.success("삭제 실패");
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
          <S.MainSection>
            {saved.length === 0 ? (
              <p className="noSave">제작한 미로가 없습니다.</p>
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
                      onClick={() => TryDelete(element, "saved")}
                    />
                  </S.ItemSection>
                </span>
              ))
            )}
          </S.MainSection>
        ) : (
          <S.MainSection>
            {liked.length === 0 ? (
              <p className="noSave">저장한 미로가 없습니다.</p>
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
          </S.MainSection>
        )}
      </S.Container>
    </S.MainSection>
  );
};

export default User;
