import { useState } from "react"
import axios from 'axios'
import './Memo.css';

function Signup() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setPassword2] = useState("");
  
    return (
    <div className="login">
      <div className="loginitem">
        <h2>회원가입</h2>
    
        <div>
          <p><input className="inputbar" type="text" placeholder="아이디" onChange={event => {
            setId(event.target.value);
          }} /></p>
          <p><input className="inputbar" type="password" placeholder="비밀번호" onChange={event => {
            setPassword(event.target.value);
          }} /></p>
          <p><input className="inputbar" type="text" placeholder="닉네임" onChange={event => {
            setPassword2(event.target.value);
          }} /></p>

          <p><button style={{marginRight: "12px"}}className="btn" onClick={() => {
            {/* 통신 부분.... */}
            {/* 이거도 db에 아이디 있는지 확인하고 토스트 해야 함... 로그인이랑 반대...*/}
            axios.post("http://43.202.79.6:3001/signup", {
                  userId: id,
                  userPw: password,
                  userName: nickname
              })
              .then(function (response) {

                  const {message} = response.data;
                  if (message == 'true') {
                    console.log("200", message);
                    window.location.href = "/login"
                  } else {
                    console.log("200", message);
                  }
                  
              }).catch(function (error) {
                  console.log(error);
              })
          }} >회원가입</button>
          <button className="btn" onClick={() => {
          window.location.href = "/login"
        }}>로그인 화면</button></p>
        </div>

        
      </div>
      
    </div> );
  }


export default Signup;