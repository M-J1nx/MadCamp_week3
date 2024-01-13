import { useState, useEffect } from 'react';

export default function Roll() {
  
  //nickname이 고정이 안됨.
  const nickname = sessionStorage.getItem("userName")
    return (
      <div style={{marginLeft:"20px"}}>
        <div>
          <h2>{nickname}의 롤링페이퍼</h2>
        </div>
        
        <p>
          나의 롤링페이퍼를 만드는 곳. <br/>
          뭔가 사람들이 메모 붙이는 동작<br/>
          뭔가 분석
        </p>
        <button>결과 만들기</button> {/* 이거가 요약 해주는 버튼... */}
        <button>메모 쓰기</button>
        <div>
          <button>아무거나</button>
          <button>공유?</button>
        </div>
        
      </div>
    );
  }