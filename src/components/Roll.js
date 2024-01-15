import { useState, useEffect } from 'react';
import Memo from './Memo';
import './Memo.css'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import WriteMemo from './WriteMemo';

export default function Roll() {
  const {idx} = useParams();//이거가 인덱스(paperid 가져오는 거...)
  //이거는 서버에서 메모지 정보 가져오는 걸로 바꿔야 함..
  //타이틀은 메모 적은 사람 닉네임, 내용은 그냥 내용 가져오기...
  //get 함수로 가져와야 할 듯.
  const [lst, setlst] = useState([]);
  const getlst = async () => {
    const res = await (await axios.get(`http://43.202.79.6:3001/getpost?paperId=${idx}`)).data;
    setlst(res)
  }

  useEffect(() => {
    getlst();
  });
  
  
  //nickname이 고정이 안됨.
  //서버에서 받아와야 할 듯?
  //paperid 있으니까...
  //
  //롤페 메모지는 반응형인데 사진은 어케함..?
  
  
  const [nickname, setnickname] = useState("")

  useEffect(() => {
    console.log(idx)
    axios.get(`http://43.202.79.6:3001/getname?paperId=${idx}`)
    .then(function (response) {
      const {userName} = response.data[0]
      console.log(userName)
      setnickname(userName)
    })
    .catch(function (error) {
      console.log(error)
    })  
    },[]);

  const [ispopup, setispopup] = useState(false)

    return (
      <div style={{marginLeft:"20px"}}>
        <div>
          <h2>{nickname}의 롤링페이퍼</h2>
        </div>
        
        <p>
          나의 롤링페이퍼를 만드는 곳. <br/>
          뭔가 사람들이 메모 붙이는 동작<br/>
          뭔가 분석
        </p>
        

        <div className='wrapper grid'>
          {lst.map((post)=>(
            <Memo postTitle = {post.userName} postDetail = {post.body} />
          ))}
        </div>

        <button>결과 만들기</button> {/* 이거가 요약 해주는 버튼... */}
        <button onClick={()=>{

          setispopup(true)

        }}>메모 쓰기</button>
        <WriteMemo isOpen={ispopup} onClose={()=>setispopup(false)} paperId={idx}/>

        {/* 메모 쓰기 했을 때 롤페처럼 서버랑 연결해서 인덱스 만들기
        여기서 롤페 내용 적기... textarea 
        다 적으면 서버에 또 저장... 
        이거를 위에 lst 대신에 서버에서 메모지 받아오는 걸로 바꾸기...*/}
        

        
      </div>
    );
  }