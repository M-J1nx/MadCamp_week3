import { useState } from "react"
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const { login, user } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        // 로그인 처리 로직
        try {
          // 가정: 로그인 성공 후 사용자 정보를 받아옴
          const userData = { username: 'exampleUser', email: 'user@example.com' };
          login(userData);
          
          
        } catch (error) {
          // 로그인 실패 처리
          console.error('로그인 실패:', error);
        }
      };
    
    useEffect(() => {
        
        if (user) {
            console.log(user);
          navigate('/');
          
        }
    }, [user]);

    
    
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
          {/* 밑에 이동하는 코드는 로그인이 성공했을 때만 이동하게 나중에 수정해야 함... */}
            axios.post("http://143.248.225.204:3001/login", {
                userId: id,
                userPw: password
            })
            .then(function (response) {
                const {message} = response.data;
                console.log("200", message);
                window.location.href = "/mainhome"
            }).catch(function (error) {
                console.log(error);
            })

            {/* 서버의 응답에 따라 로그인 성공 여부 결정하는 거 해야 함...*/}
            {/* handleLogin();*/}
            
            }} /></p>
      </div>
  
      <p>계정이 없으신가요?  <button onClick={() => {
        window.location.href = "/sign"
      }}>회원가입</button></p>
      <button onClick={()=>{window.location.href="/"}}>홈 화면 가기</button>
      
    </> 
    )
  }

export default Login;