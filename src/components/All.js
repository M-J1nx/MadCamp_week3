import axios from 'axios';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

//get으로 paperID 받아서 이걸로 게시물들 눌렀을 때 각자의 롤페 페이지로 이동.
//useEffect가 컴포넌트로 넘어왔을 때 실행되는 건데, 이걸로 papaerID 받아오는 거 하면 될 듯.

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
      
      <div>
        
        전체 게시판입니다. <br/>
        더미 데이터로 게시판 만들어보기...
        {lst.map((paper)=>(
          <li key={paper.paperId}>
            <Link to={`/roll/${paper.paperId}`}>게시물들{paper.paperId}</Link>
          </li>
        ))}

      </div>
    );
  }

