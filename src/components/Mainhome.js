
export default function Mainhome() {
    return (
        <div style={{marginLeft: "20px", marginTop: "20px"}}>
          <button onClick={()=>{window.location.href = "/all"}}>전체 게시판</button>
          <button onClick={()=>{window.location.href = "/like"}}>좋아요 게시판</button>
          <button onClick={()=>{window.location.href = "/roll"}}>롤링 페이퍼 만들러 가기</button>
        </div>
    );
}