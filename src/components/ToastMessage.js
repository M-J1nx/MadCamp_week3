import './Memo.css';

export const ToastMessage = (props) => {
    
  return (
    <div className="toast_container">
      <div className="toast_text">{props.text}</div>
    </div>
  );
};