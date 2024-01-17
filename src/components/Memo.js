import Delete from './Delete';
import './Memo.css';
import { useState } from "react"


export default function Memo(props) {
    const [ispopup, setispopup] = useState(false)
    
    return (
        <div className='memo' >
            
            <h2>{props.postTitle}</h2>
            <p onClick={()=>{setispopup(true)}}>{props.postDetail}</p>
            <Delete isOpen={ispopup} onClose={()=>{setispopup(false)}} postId = {props.postId}/>
            
        </div>

    )
}