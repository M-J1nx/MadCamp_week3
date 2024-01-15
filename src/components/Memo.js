import './Memo.css';

export default function Memo(props) {
    return (
        <div className='memo' onClick={()=>{
            console.log("누르기")
        }}>
            <h2>{props.postTitle}</h2>
            <p>{props.postDetail}</p>
        </div>
    )
}