import React from "react";
import SidebarCss from "../css/sidebar.css"

const SideBar = (props) => {
  let _content = [];
  if(props.select === "del"){
    _content.push(<button onClick={function(e){
      e.preventDefault() 
      props.delMode(0)}}>삭제</button>);
    _content.push(<button onClick={function(e){
      e.preventDefault() 
      props.delMode(1)}}>완전삭제</button>);
  } else if(props.select === "wall") {
    _content.push(<button onClick={function(e){
      e.preventDefault() 
      props.drawMode(0)}}>검은색</button>);
    _content.push(<button onClick={function(e){
      e.preventDefault() 
      props.drawMode(1)}}>빨간색</button>);
    _content.push(<button onClick={function(e){
      e.preventDefault() 
      props.drawMode(2)}}>초록색</button>);
  }

  return(
    <div
    className="sidebar"
    style={{backgroundColor: "green"}}>
      {_content}
    </div>
  )
}

export default SideBar