import React, { useState, useEffect } from "react";
import * as S from "./style";
import { toast } from "react-toastify";
import axios from "axios";
import { useRecoilState } from "recoil";
import { GoogleId, Liked, Profile } from "../../Atoms/";

const User = () => {
  const [saved, setSaved] = useState([]); // 저장하기
  const [googleId, setGoogleId] = useRecoilState(GoogleId);
  const [liked, setLiked] = useRecoilState(Liked);
  const [liked, setLiked] = useRecoilState(Liked);

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

  // 다른 사람 맵 저장한거 조회
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
  }, [setLiked]);

  return (
    <>
      <S.MainSection>
        <h1 className="profile">내 정보</h1>
        <hr />
        <S.UserSection>
          <img src={sessionStorage.getItem("user_img")} alt="" />
          <div>
            <p>이름 : {sessionStorage.getItem("user_name")}</p>
            <p>이메일 : {sessionStorage.getItem("user_email")}</p>
          </div>
        </S.UserSection>
        <S.MapSection>
          <h1>
            {sessionStorage.getItem("user_name")} 님이 <S.Green>만든</S.Green>
            미로
          </h1>
          <hr />
          {saved.length === 0 ? (
            <p className="noSave">만든 미로가 없습니다.</p>
          ) : (
            saved.map((element, i) => (
              <div key={i}>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <p className="mapId">mapID : {element.mapId}</p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 사용자가 직접 만든 미로 지우기
                        axios
                          .delete(`/map/${element.mapId}`)
                          .then((res) => {
                            setSaved(
                              saved.filter(
                                (mapData) => mapData.mapId !== element.mapId,
                              ),
                            );
                            toast.success("삭제 완료");
                          })
                          .catch((err) => {
                            console.log(err);
                            toast.error("삭제 실패");
                          });
                      }}
                    >
                      삭제하기
                    </button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </div>
            ))
          )}
          <h1>
            {sessionStorage.getItem("user_name")} 님이 <S.Green>저장한</S.Green>
            미로
          </h1>
          <hr />
          {liked.length === 0 ? (
            <p className="noSave">저장한 미로가 없습니다.</p>
          ) : (
            liked.map((element, i) => (
              <div key={i}>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <p className="mapId">mapID : {element.mapId}</p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        // 저장된 맵 아이디가 likeId인 맵 삭제
                        axios
                          .delete(`/like/${element.likeId}`)
                          .then((res) => {
                            setLiked(
                              liked.filter(
                                (mapData) => mapData.mapId !== element.mapId,
                              ),
                            );
                            toast.success("삭제 완료");
                          })
                          .catch((err) => {
                            console.log(err);
                            toast.success("삭제 실패");
                          });
                      }}
                    >
                      삭제하기
                    </button>
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

export default User;
