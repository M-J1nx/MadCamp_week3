export default function Roll() {
    return (
      <div>
        <div>
          <h2>롤링페이퍼?</h2>
          <a href="/" onClick={()=>{
            console.log("로그아웃 기능?");
          }}>로그아웃</a>
          {/* 이거 로그아웃 했을 때도 통신 필요... */}
        </div>
        
        <p>
          나의 롤링페이퍼를 만드는 곳. <br/>
          뭔가 사람들이 메모 붙이는 동작<br/>
          뭔가 분석
        </p>
        <button>결과 만들기</button> {/* 이거가 요약 해주는 버튼... */}
        <div>
          <button>저장?</button>
          <button>공유?</button>
        </div>
        
      </div>
    );
  }