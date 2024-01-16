import Modal from 'react-modal'
import axios from 'axios'
import { ToastMessage } from "./ToastMessage";
import './Memo.css';
import { useEffect, useState } from "react"



export default function Delete({isOpen, onClose, postId}) {
    const [text, settext] = useState("");
    
    
    return (
        <div>
            <Modal style={{
                content: {
                    width: '150px',
                    height: '80px',
                    margin: 'auto'
                    
                }
            }} isOpen={isOpen}>
                
                삭제하시겠습니까?
                <p>
                <button style={{marginLeft: "10px", marginRight: "10px"}} onClick={()=>{
                    axios.post("http://43.202.79.6:3001/delpost", {
                        postId: postId,
                        userId: sessionStorage.getItem("id")
                    })
                    .then(function (response) {
                        // userId가 같으면 삭제, 아니면 삭제 불가 메시지...
                        // message로 true false 받고 삭제 유무 선택.
                        const {message} = response.data;
                        if (message == 'true') {
                            onClose()
                        } else {
                            
                            settext("작성자만 삭제할 수 있습니다.")
                        }
                        
                    }).catch(function (error) {
                        console.log(error);
                    })
                }}>삭제</button>
                <button onClick={()=>{
                    settext("")
                    onClose()
                    }}>취소</button></p>
                <p style={{fontSize: "10px", color: "red"}}>{text}</p>
                
                
            </Modal>
            
        </div>
    );
}