import { useState } from "react"
import axios from 'axios'

export default function() {
    const [text, settext] = useState("");
    return (
        <div>
            <h2>메모 쓰기</h2>
            <textarea style={{width: "200px", height: "300px"}} onChange={event => {
                settext(event.target.value)
            }}></textarea>
            <button onClick={()=>{
                axios.post("http://43.202.79.6:3001/savepost", {
                    userId: sessionStorage.getItem("id"),
                    postDetail: text
                })
                .then(function (response) {
    
                    const {paperId} = response.data;
                    window.location.href=`/roll/${paperId}`
                    
                }).catch(function (error) {
                    console.log(error);
                })
            }}>저장</button>
        </div>
    )
}