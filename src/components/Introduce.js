import React ,{ useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const cursor = keyframes`
    0%{
        border-right: .125rem solid #3E3E40
    } 
    100%{
        border-right: none;
    } 
`

const Txt = styled.div`
    width: fit-content;
    height: fit-content;
    position: absolute;
    transform:translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 6;
    p{
        font-size: ${({theme})=>theme.fontSize.halftitle};
        color: #3E3E40; 
        font-family: 'Noto Serif KR', serif;
        font-weight: 600;
        display: block; 
        width: fit-content;
        margin: 1.6rem;
    } 
    & .running{
        animation: ${cursor} 0.8s infinite;
    }
    & .paused{
        border-right: none;
    }
`;

const texts = ["프론드엔드 개발자", "이고은 입니다."];

const Introduce = ({ setFinProlog }) => {
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
               if(!setFinProlog){
                   setFinProlog(true);
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