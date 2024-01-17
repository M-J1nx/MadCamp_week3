import axios, { all } from 'axios';
import './Memo.css';
import { useParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';




//https://pixabay.com/ko/images/search/검색어/
//위에로 연결 쉬울 듯...
export default function Result() {
    const location = useLocation();
    const key = location.state.rst
    const nick = location.state.nick
    const imgURL = "https://i.pinimg.com/736x/35/a4/64/35a4644b880f02610a53d9baf71944cb.jpg"
    const [imgurl, setimgurl] = useState(imgURL)


    
    const {idx} = useParams();
    
    
    

    const [part, setPart] = useState('');

    const handlePart = async () => {
        const response = await axios.post(`http://43.202.79.6:3001/part`,{
            result: key
        });
        const {return_object} = JSON.parse(response.data)
        
    
        const {sentence} = return_object
        
        const {morp_eval} = sentence[0]
        var total = []
        for (let i=0; i<morp_eval.length; i++) {
            var { result } = morp_eval[i]; 
            total.push(result)
        }
        const resultArray = total.flatMap(item => item.split('+'));
    
        const wordsArray = resultArray.filter(item => item.includes("/NNG")).map(item => item.split("/")[0]);
        const rstt = wordsArray[Math.floor(Math.random() * wordsArray.length)]
        
        setPart(rstt) 
      };

    useEffect(()=>{
        if (part != ''){
            
          handleCrawl()
        }
        
      }, [part])

    const handleCrawl = async () => {
        const response = await axios.post(`http://43.202.79.6:3001/croll`,{
            imgWords: part
        });
        const {data} = response.data
        const {hits} = data
        const {largeImageURL} = hits[0]
        console.log(largeImageURL) 
        setimgurl(largeImageURL)
          
      };
    
    
    
    

    return (
        <div>
            <div className="home1" />
            <div className='resultItem'>
                <div style={{textAlign: "center", position: "absolute",fontFamily: "PuradakGentleGothicR", fontSize: "30px"}}>{nick}님의 이미지는?</div>
                <img style={{width: "20vw", height: "20vw" , paddingTop:"25%", position: "absolute"}} src={imgurl} alt="웹 이미지"></img>
                <p style={{width: "80vw", textAlign: "center",fontFamily: "SOGANGUNIVERSITYTTF", fontSize: "15px", paddingTop:"53%", position: "absolute"}}>[ 남들의 보는 나의 이미지 한 줄 요약] </p>
                <p style={{width: "80vw", textAlign: "center",fontFamily: "SOGANGUNIVERSITYTTF", fontSize: "20px", paddingTop:"57%", position: "absolute"}}>{key}</p>
                <p style={{textAlign: "center" ,paddingTop:"70%", position: "absolute"}}>
                    <button style={{marginRight: "10px"}} className='btn' onClick={()=>{
                        window.location.href=`/roll/${idx}`
                    }}>돌아가기</button>

                    <button className='btn' onClick={handlePart}>사진으로 확인하기</button>
                </p>
            </div>
        </div>
    );
}