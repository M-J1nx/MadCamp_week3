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
        console.log(wordsArray)
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
        setimgurl(largeImageURL)
          
      };
    
    
    
    

    return (
        <div className="login">
            <div className='loginitem'>
                <h2 style={{textAlign: "center"}}>{nick}의 이미지는?</h2>
                
                <div style={{textAlign: "center"}}>
                    <img style={{width: "20vw", height: "20vw"}} src={imgurl} alt="웹 이미지"></img>
                </div>
                <p style={{width: "80vw", textAlign: "center"}}>{key}</p>
                <p style={{textAlign: "center"}}>
                    <button style={{marginRight: "10px"}} className='btn' onClick={()=>{
                        window.location.href=`/roll/${idx}`
                    }}>돌아가기</button>

                    <button className='btn' onClick={handlePart}>사진으로 확인하기</button>
                </p>
                
                

                
            </div>

        </div>
    );
}