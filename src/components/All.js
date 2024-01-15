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
      
      <div className='login'>
        <div className='bulletin'>
          <h1>전체 게시판</h1>
          <div style = {{width: "50vw", height: "75vh", border: "1px solid #eadcd7", padding: "20px", backgroundColor: "#eadcd7"}}>
            {lst.map((paper)=>(
              <li style={{marginBottom: "10px", borderBottom: "1px solid black"}}key={paper.paperId}>
                <Link to={`/roll/${paper.paperId}`} style={{ textDecoration: "none", color: "black"}}>게시물들{paper.paperId}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }

