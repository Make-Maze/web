import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Liked } from "../../Atoms";
import * as S from "./style";
const PageList = (props) => {
  const list = [0, 1, 2, 3];
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const [liked, setLiked] = useRecoilState(Liked);
  return (
    <>
      {list.map((a, i) => (
        <span key={i}>{a}</span>
      ))}
    </>
  );
};
export default PageList;
