import './Memo.css';

export default function Memo(props) {
    return (
        <div className='memo'>
            <h2>{props.memoTitle}</h2>
            <p>{props.memoDetail}</p>
        </div>
    )
}