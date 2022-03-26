import React, { useState, useEffect } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import axios from "axios";
import { useRecoilState } from "recoil";
import { Liked, Profile } from "../../Atoms/";

const User = () => {
  const [saved, setSaved] = useState([]); // 저장하기
  const [liked, setLiked] = useRecoilState(Liked);
  const [profile, setProfile] = useRecoilState(Profile);

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
    <>
      <S.MainSection>
        <h1 className="profile">내 정보</h1>
        <hr />
        <S.UserSection>
          <img src={profile.imageUrl} alt="" />
          <div>
            <p>이름 : {profile.name}</p>
            <p>이메일 : {profile.email}</p>
          </div>
        </S.UserSection>
        <S.MapSection>
          <h1>
            {profile.name} 님이 <S.Green>만든</S.Green>
            미로
          </h1>
          <hr />

          {saved.length === 0 ? (
            <p className="noSave">만든 미로가 없습니다.</p>
          ) : (
            saved.map((element, i) => (
              <span key={i}>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <p className="mapId">mapID : {element.mapId}</p>
                  <S.ButtonWrapper>
                    <button onClick={() => TryDelete(element, "saved")}>
                      삭제하기
                    </button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </span>
            ))
          )}

          <h1>
            {profile.name} 님이 <S.Green>저장한</S.Green>
            미로
          </h1>
          <hr />

          {liked.length === 0 ? (
            <p className="noSave">저장한 미로가 없습니다.</p>
          ) : (
            liked.map((element, i) => (
              <span key={i}>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <p className="mapId">mapID : {element.mapId}</p>
                  <S.ButtonWrapper>
                    <button onClick={() => TryDelete(element, "shared")}>
                      삭제하기
                    </button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </span>
            ))
          )}
        </S.MapSection>
      </S.MainSection>
    </>
  );
};

export default User;
