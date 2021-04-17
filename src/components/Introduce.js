import React ,{ useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const cursor = keyframes`
    0%{
        border-right: 2px solid #fff
    } 
    100%{
        border-right: none;
    } 
`

const Txt = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    margin-left: 30px;
    z-index: 6;
    p{
        font-size: 36px;
        color: white; 
        font-family: 'Noto Serif KR', serif;
        font-weight: 500;
        display: block; 
        width: fit-content;
        margin: 25px;
    } 
    & .running{
        animation: ${cursor} 0.8s infinite;
    }
    & .paused{
        border-right: none;
    }
`;

const texts = ["프론드엔드 개발자", "이고은 입니다."];

const Introduce = () => {
    const [comment1, setComment1] = useState("");
    const [comment2, setComment2] = useState("");
    const timer = ms => new Promise(res=>setTimeout(res, ms));

    useEffect(()=>{
        const typing = async(i) => {
            if(i){
               for(const t of texts[i]){
                setComment2(prev => prev + t);
                await timer(100);
               }
            }else{
                for(const t of texts[i]){
                    setComment1(prev => prev + t);
                    await timer(100);
                }
                typing(1);
            }   
        };
        typing(0);
        
    }, []);


    return(
        <Txt>
            <p className={comment2 !== ""? 'paused' : 'running'}>{comment1}</p>
            <p className={comment2 !== ""? 'running' : 'paused'}>{comment2}</p>

        </Txt>
    )

}

export default Introduce;