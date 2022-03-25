import React, { useState } from "react";
import "../../style/sidebar.css";
import potal from "../../Assets/Item/potal.png";
import gunUp from "../../Assets/Item/gun_up.png";
import gunDown from "../../Assets/Item/gun_down.png";
import gunRight from "../../Assets/Item/gun_right.png";
import gunLeft from "../../Assets/Item/gun_left.png";
import gasi from "../../Assets/Item/gasi.png";
import potion from "../../Assets/Item/potion.png";

const SideBar = (props) => {
  let _content = [];

  const [gun, setGun] = useState("up");

  if (!props.item) {
    if (props.draw >= 4) {
      props.drawMode(0);
    }
    _content.push(
      <div
        className="blackCircle"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(0);
          props.setSelect("wall");
        }}
      ></div>,
    );
    _content.push(
      <div
        className="redCircle"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(1);
          props.setSelect("wall");
        }}
      ></div>,
    );
    _content.push(
      <div
        class="yellowCircle"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(2);
          props.setSelect("wall");
        }}
      ></div>,
    );
    _content.push(
      <div
        class="greenCircle"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(3);
          props.setSelect("wall");
        }}
      ></div>,
    );
  } else {
    if (gun === "up" || gun === "upX") {
      if (gun === "up") {
        props.drawMode(4);
      }
      _content.push(
        <div
          className="gun"
          onClick={function (e) {
            e.preventDefault();
            setGun("down");
            props.setSelect("item");
          }}
        >
          <a title="위쪽 대포">
            <img alt="" src={gunUp}></img>
          </a>
        </div>,
      );
    } else if (gun === "down" || gun === "downX") {
      if (gun === "down") {
        props.drawMode(5);
      }
      _content.push(
        <div
          className="gunDown"
          onClick={function (e) {
            e.preventDefault();
            setGun("right");
          }}
        >
          <a title="아래쪽 대포">
            <img alt="" src={gunDown}></img>
          </a>
        </div>,
      );
    } else if (gun === "right" || gun === "rightX") {
      if (gun === "right") {
        props.drawMode(6);
      }
      _content.push(
        <div
          className="gunRight"
          onClick={function (e) {
            e.preventDefault();
            setGun("left");
            props.setSelect("item");
          }}
        >
          <a title="오른쪽 대포">
            <img alt="" src={gunRight}></img>
          </a>
        </div>,
      );
    } else if (gun === "left" || gun === "leftX") {
      if (gun === "left") {
        props.drawMode(7);
      }
      _content.push(
        <div
          className="gunLeft"
          onClick={function (e) {
            e.preventDefault();
            setGun("up");
            props.setSelect("item");
          }}
        >
          <a title="왼쪽 대포">
            <img alt="" src={gunLeft}></img>
          </a>
        </div>,
      );
    }
    _content.push(
      <div
        className="potal"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(8);
          props.setSelect("item");
          if (!gun.includes("X")) {
            setGun(gun + "X");
          }
        }}
      >
        <a title="포탈">
          <img alt="" src={potal}></img>
        </a>
      </div>,
    );
    _content.push(
      <div
        className="potion"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(12);
          props.setSelect("item");
          if (!gun.includes("X")) {
            setGun(gun + "X");
          }
        }}
      >
        <a title="속도포션">
          <img alt="" src={potion}></img>
        </a>
      </div>,
    );
    _content.push(
      <div
        className="gasi"
        onClick={function (e) {
          e.preventDefault();
          props.drawMode(13);
          props.setSelect("item");
          if (!gun.includes("X")) {
            setGun(gun + "X");
          }
        }}
      >
        <a title="가시">
          <img alt="" src={gasi}></img>
        </a>
      </div>,
    );
  }

  return <div className="sidebar">{_content}</div>;
};

export default SideBar;
