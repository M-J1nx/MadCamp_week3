import { useState } from "react"
import axios from 'axios'
import Modal from 'react-modal'
import './Memo.css'

export default function WriteMemo({isOpen, onClose, paperId}) {
    const [text, settext] = useState("");
    let [inputCount, setInputCount] = useState(0);
    
    
    return (
        
        <div>
            <Modal style={{
                content: {
                    width: '250px',   // 원하는 너비로 설정
                    height: '500px',  // 원하는 높이로 설정
                    margin: 'auto',  // 화면 중앙 정렬을 위한 margin
                    
                    backgroundColor: '#f7ecbe'
                }
            }} isOpen={isOpen}>
                <h2>메모 쓰기</h2>
                <textarea className='txt' style={{width: "100%", height: "65%", backgroundColor: '#f7ecbe'}} maxLength={79} onChange={event => {
                    settext(event.target.value)
                    setInputCount(event.target.value.length)
                }}></textarea>
                <p><span>{inputCount}</span>
                <span>/80 자</span></p>
                <div style={{ textAlign: 'right' }}>
                    <button style={{marginRight: "10px"}} className="memobtn" onClick={()=>{
                        console.log(paperId)
                        console.log(sessionStorage.getItem("id"))
                        console.log(text)

                        axios.post("http://43.202.79.6:3001/savepost", {
                            paperId: paperId,
                            userId: sessionStorage.getItem("id"),
                            body: text
                        })
                        .then(function (response) {
                            onClose()
                            
                        }).catch(function (error) {
                            console.log(error);
                        })
                        
                        
                    }}>저장</button>
                    <button onClick={()=>onClose()} className="memobtn">취소</button>
                </div>
            </Modal>
        </div>
    )
}