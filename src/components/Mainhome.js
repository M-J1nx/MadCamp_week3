import axios from 'axios';

export default function Mainhome() {
    const id = sessionStorage.getItem("id")
    return (

        //hasroll이 지금 세션에 저장되어 있는데 이게 true면 롤페 만들기가 아니라 롤페 보기로 버튼이 바꾸게 나중에 설정해야함..
        //이거 롤페 만들어지는 순간 이거가 게시판에서 넘어올 수 있게 게시글 형식으로 우선 해보자..
        <div style={{marginLeft: "20px", marginTop: "20px"}}>
          <button onClick={()=>{window.location.href = "/all"}}>전체 게시판</button>
          <button onClick={()=>{window.location.href = "/like"}}>좋아요 게시판</button>
          <button onClick={()=>{
            axios.post("http://143.248.225.204:3001/Roll", {
                userId: id
            })
            .then(function (response) {
                const {paperId} = response.data;
                console.log(paperId)
                window.location.href = `/roll/${paperId}`
            }).catch(function (error) {
                console.log(error);
            })
            }}>나의 롤링페이퍼 만들기</button>
        </div>
    );
}