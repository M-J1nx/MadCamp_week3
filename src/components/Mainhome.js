import axios from 'axios';
import {useState, useEffect} from "react"

export default function Mainhome() {
    const id = sessionStorage.getItem("id")
    const [hasRoll, sethasRoll] = useState(false)
    const [pid, setpid] = useState(0)

    useEffect(() => {
        axios.post("http://43.202.79.6:3001/hasroll", {
                userId: id
            })
            .then(function (response) {
                const {message} = response.data;
                console.log(message)
                if (message) {
                    
                    const {paperId}=response.data
                    console.log(paperId[0])
                    setpid(paperId[0])
                }
                sethasRoll(message)
            }).catch(function (error) {
                console.log(error);
            })  
        },[]);

    const handleRoll = () => {
        axios.post("http://43.202.79.6:3001/Roll", {
                userId: id
            })
            .then(function (response) {
                const {paperId} = response.data;
                console.log(paperId)
                sethasRoll(true)
                window.location.href = `/roll/${paperId}`
            }).catch(function (error) {
                console.log(error);
            })
    }
    return (

        //hasroll이 지금 세션에 저장되어 있는데 이게 true면 롤페 만들기가 아니라 롤페 보기로 버튼이 바꾸게 나중에 설정해야함..
        //이거 롤페 만들어지는 순간 이거가 게시판에서 넘어올 수 있게 게시글 형식으로 우선 해보자..
        <div style={{marginLeft: "20px", marginTop: "20px"}}>
          <button onClick={()=>{window.location.href = "/all"}}>전체 게시판</button>
          <button onClick={()=>{window.location.href = "/like"}}>좋아요 게시판</button>
          <button onClick={hasRoll ? () => {window.location.href=`/roll/${pid}`} : handleRoll}>
            {hasRoll ? "롤링페이퍼 보기" : "나의 롤링페이퍼 만들기"}
          </button>
        </div>
    );
}