import axios from 'axios';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import './Memo.css';

//get할 때 닉네임도 받아와서 게시물 이름에 닉네임이 들어가게 하도록 수정해야할 듯.

export default function All() {
  const [lst, setlst] = useState([]);
  const getlst = async () => {
    const res = await (await axios.get('http://43.202.79.6:3001/all')).data;
    setlst(res)
  }

  useEffect(() => {
    getlst();
  });
    return (
      <div style={{ position: "relative", height: "100vh" }}>
        <div className="home1" />
        <div className='bulletin'>
          <div style={{textAlign: "center", position: "absolute",fontFamily: "PuradakGentleGothicR", fontSize: "3em"}}>전체 게시판</div>
          <div style = {{width: "50vw", position: "absolute",border: "1px solid #eadcd7", padding: "20px", marginTop: "8%",backgroundColor: "#eadcd7"}}>
              
            {lst.map((paper)=>(
              <li style={{marginBottom: "20px"}} key={paper.paperId}>
                <Link to={`/roll/${paper.paperId}`} style={{ textDecoration: "none", color: "black", fontFamily: "GyeonggiBatang", fontSize: "1.3em"}}>{paper.userName}의 롤링 페이퍼</Link>
              </li>
            ))}

          </div>
          
        </div>
      </div>
    );
  }

