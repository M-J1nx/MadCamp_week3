/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';

function PublicUp() {
  const history = useNavigate();
  let [로그인, 로그인변경] = useState("로그인1");
  return (
    <div className = "black-nav">
      <h4>사이트 이름</h4>
      <button onClick={()=>{
        로그인변경("로그인 바뀌냐?");
        console.log(로그인);
        history("/login");
        
        }}>{로그인}</button>
    </div>
  );
}

function Home(){
  return (
    <div className="App">
      <PublicUp></PublicUp>
      <p>사이트 소개입니다?</p>
      <div>
        <button onClick={()=>{window.location.href = "/all"}}>전체 게시판</button>
        <button onClick={()=>{window.location.href = "/like"}}>좋아요 게시판</button>
        <button onClick={()=>{window.location.href = "/roll"}}>롤링 페이퍼 만들러 가기</button>
      </div>
    </div>
  )
}

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <h2>로그인</h2>

    <div>
      <p><input className="login" type="text" name="username" placeholder="아이디" onChange={event => {
        setId(event.target.value);
      }} /></p>
      <p><input className="login" type="password" name="pwd" placeholder="비밀번호" onChange={event => {
        setPassword(event.target.value);
      }} /></p>

      <p><input className="btn" type="submit" value="로그인" onClick={() => {
        {/* 통신 부분... */}
      }} /></p>
    </div>

    <p>계정이 없으신가요?  <button onClick={() => {
      window.location.href = "/sign"
    }}>회원가입</button></p>
    <button onClick={()=>{window.location.href="/"}}>홈 화면 가기</button>
    
  </> 
  )
}

function Signin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  return (<>
    <h2>회원가입</h2>

    <div>
      <p><input className="login" type="text" placeholder="아이디" onChange={event => {
        setId(event.target.value);
      }} /></p>
      <p><input className="login" type="password" placeholder="비밀번호" onChange={event => {
        setPassword(event.target.value);
      }} /></p>
      <p><input className="login" type="password" placeholder="비밀번호 확인" onChange={event => {
        setPassword2(event.target.value);
      }} /></p>

      <p><input className="btn" type="submit" value="회원가입" onClick={() => {
        {/* 통신 부분.... */}
      }} /></p>
    </div>

    <p>로그인화면으로 돌아가기  <button onClick={() => {
      window.location.href = "/login"
    }}>로그인</button></p>
  </> );
}

function All() {
  return (
    
    <div>
      <PublicUp></PublicUp>
      전체 게시판입니다. <br/>
      더미 데이터로 게시판 만들어보기...
    </div>
  );
}

function Like() {
  return (
    <div> 
      <PublicUp></PublicUp>
      좋아요 게시판입니다.
      이거는 게시판이랑 똑같을 듯...
    </div>
  ); 
}

function Roll() {
  return (
    <div>
      <PublicUp></PublicUp>
      <div>
        <h2>롤링페이퍼?</h2>
        <a href="/">로그아웃</a>
        {/* 이거 로그아웃 했을 때도 통신 필요... */}
      </div>
      
      <p>
        나의 롤링페이퍼를 만드는 곳. <br/>
        뭔가 사람들이 메모 붙이는 동작<br/>
        뭔가 분석
      </p>
      <button>저장?</button>
      <button>공유?</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/roll" element={<Roll/>}/>
          <Route path = "/sign" element={<Signin/>}/>
          <Route path = "/all" element={<All/>}/>
          <Route path = "/like" element={<Like/>}/>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
