import { useState, useEffect } from 'react';
import Memo from './Memo';
import './Memo.css'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import WriteMemo from './WriteMemo';



export default function Roll() {
  const {idx} = useParams();//이거가 인덱스(paperid 가져오는 거...)
  const navigate = useNavigate();
  
  const [lst, setlst] = useState([]);
  const getlst = async () => {
    const res = await (await axios.get(`http://43.202.79.6:3001/getpost?paperId=${idx}`)).data;
    setlst(res)
  }

  useEffect(() => {
    getlst();
  });
  
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

  const [postData, setPostData] = useState('');

  const handleGetData = async () => {
    try {
      const response = await axios.get(`http://43.202.79.6:3001/result?paperId=${idx}`);
      const extractedBodies = response.data.map(item => item.body);
      const finalBody = extractedBodies.join('\n');
      
      setPostData(finalBody);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
/////////////////////////////////////////////////내용 부족하거나 이상하면 에러남. api 서버에서.
  useEffect(()=>{
    if (postData != ''){
      console.log(postData)
      handlesum()
      
      
    }
    
  }, [postData])

  const handlesum = async () => {
    try {
      const response = await axios.post("http://43.202.79.6:3001/api", {result: postData})
      const jsonString = JSON.stringify(response.data.summary);
      const finalresult = jsonString.slice(1, -1);
      
      navigate(`/roll/${idx}/result`, {state: {rst: finalresult, nick: nickname}})

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


    return (
      <div className='roll'>
        <div>
          <div style={{paddingTop: "5%", textAlign: "center"}}>
            <h2 style={{marginTop: 0, fontFamily: "PuradakGentleGothicR", fontSize: "25px"}}>{nickname}님의 롤링페이퍼</h2>
          </div>

          <div style={{paddingTop: "2%",textAlign: "center"}}>
            <button style={{marginBottom: "20px", marginRight: "10px", fontFamily: "GyeonggiBatang"}} className='whitebtn' onClick={()=>{
              handleGetData()
            }}>결과 보기</button> {/* 이거가 요약 해주는 버튼... */}
            <button style={{marginBottom: "20px", marginRight: "10px", fontFamily: "GyeonggiBatang"}} className='whitebtn' onClick={()=>{setispopup(true)}}>메모 쓰기</button>
            <button style={{marginBottom: "20px", marginRight: "10px", fontFamily: "GyeonggiBatang"}} className='whitebtn' onClick={()=>{window.location.href="/mainhome"}}>메인으로 돌아가기</button>
            <WriteMemo isOpen={ispopup} onClose={()=>setispopup(false)} paperId={idx}/>         
          </div>

          <div style={{marginLeft: "10vw", marginRight: "10vw",paddingRight: "20px"}} className='wrapper grid'>
            {lst.map((post)=>(
            <Memo postTitle = {post.userName} postDetail = {post.body} postId = {post.postId} />
            ))}
          </div>
        </div>
      </div>
    );
  }