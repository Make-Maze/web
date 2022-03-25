import React, { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "../../Api";
import { toast } from "react-toastify";
import { GoogleId, Liked } from "../../Atoms/AtomContainer";
import { useRecoilState } from "recoil";
const Share = () => {
  const [shared, setShared] = useState([]); // 공유하기
  const [googleID, setGoogleId] = useRecoilState(GoogleId);
  const [liked, setLiked] = useRecoilState(Liked);
  // 모든 맵 조회
  useEffect(() => {
    api.get("/map").then((res) => {
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
            shared.map((element) => (
              <>
                <S.ItemSection>
                  <img src={element.img} alt="" />
                  <p>{element.userName}님이 제작한</p>
                  <span className="title">{element.mapName}</span>
                  <p className="mapId">mapId : {element.mapId}</p>
                  <S.ButtonWrapper>
                    <button
                      onClick={() => {
                        if (googleID === element.userGoogleId) {
                          toast.error("자신이 만든 맵은 저장할 수 없습니다.");
                        } else if (isMyMap(element.mapId) !== liked.length) {
                          toast.error("이미 저장된 맵입니다.");
                        } else {
                          api
                            .get(`/like/${googleID}/${element.mapId}`)
                            .then((res) => {
                              console.log(element);
                              setLiked(
                                liked.concat({
                                  ...element,
                                  likeId: res.data.likeId,
                                  mapId: res.data.mapId,
                                }),
                              );
                              toast.success("저장 완료");
                            })
                            .catch((err) => {
                              console.log(err);
                              toast.success("저장 실패");
                            });
                        }
                      }}
                    >
                      저장하기
                    </button>
                  </S.ButtonWrapper>
                </S.ItemSection>
              </>
            ))
          )}
        </S.MapSection>
      </S.MainSection>
    </>
  );
};

export default Share;
