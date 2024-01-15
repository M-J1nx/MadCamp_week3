import { useState } from "react"
import axios from 'axios'
import Modal from 'react-modal'

export default function WriteMemo({isOpen, onClose, paperId}) {
    const [text, settext] = useState("");
    
    return (
        
        <div>
            <Modal isOpen={isOpen}>
                <h2>메모 쓰기</h2>
                <textarea style={{width: "200px", height: "300px"}} onChange={event => {
                    settext(event.target.value)
                }}></textarea>
                <button onClick={()=>{
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
            </Modal>
        </div>
    )
}