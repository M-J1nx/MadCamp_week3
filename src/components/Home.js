import PublicUp from "./PublicUp"
import './Memo.css';


export default function Home(){
  
    return (
      <>
        <div className="home1" />
        <div className="home2"/>
        <div className="home3"/>
        <div className="home4">
          <button className="btndesign" onClick={() => { window.location.href = "/login" }}>로그인</button>
        </div>
        
      </>
      
    )
  }