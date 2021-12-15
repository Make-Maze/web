import React from "react";

const SideBar = (props) => {
  let _content
  if(props.select === "del"){
    _content = "삭제중"
  } else {
    _content = "벽그리는 중"
  }

  return(
    <div
    style={{width: (window.innerWidth - ((window.innerWidth - 100) * 0.85)), height: (window.innerHeight - 570) * 2, backgroundColor: "green"}}>
      {_content}
    </div>
  )
}

export default SideBar