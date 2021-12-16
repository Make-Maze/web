import React from "react";
import ToolbarCss from "../css/toolline.css"

const Toolbar = (props) => {
  return(
    <div 
    className="toolbar"
    style={{ backgroundColor: "green", overflow: "hidden"}}>
      <button onClick={function(e){
        e.preventDefault();
        props.onSelect("del");
      }}>삭제</button>
      <button onClick={function(e){
        e.preventDefault();
        props.onSelect("wall");
      }}>벽</button>
    </div>
  )
}

export default Toolbar