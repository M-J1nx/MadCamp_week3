import React from "react";
import PublicUp from "./PublicUp";
// import './Home.css';
import './Memo.css'

export default function Home() {
  return (
    <React.Fragment>
      {/* <header className="header"></header>
      <div className="MainBanner"></div>
      <main className="Main">
        <div className="LeftBar"></div>
        <div className="Content">
          <div className="WhatsYourImage"/>
          <div className="Description1"/>
          <div className="Description2"/>
        </div>
        <div className="RightBar"></div>
      </main> */}
      <div className="home1" />
      <div className="home2" />
      <div className="home3" />
      <div className="home4">
        <button className="btndesign" onClick={() => { window.location.href = "/login" }}>로그인</button>
      </div>
    </React.Fragment>
  );
}
