import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Introduce from './Introduce';

const spin = keyframes`
    from {
        transform: rotateY(90deg);
    }
    to {
        transform: rotateY(0deg);
    }
`

const drawLine = keyframes`
    from{
        height: 1px;
    }
    to{
        height: 600px;
    }
`

const WarpCube = styled.div`
    width: 800px;
    height: 600px;
    perspective: 1500px;
    perspective-origin: center;
    position: absolute;
    transform:translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 4;
    
`;
const VerticalLine = styled.div`
    width: 1px;
    height:600px;
    border-left: 1.5px solid white; 
    margin: 0 auto;
    animation: ${drawLine} 2s linear;
`;

const Background = styled.div`
    width: 800px;
    height: 600px;
    background: linear-gradient(217deg, rgba(138,166,179), rgba(230,217,190,0.12) 70.71%), 
                linear-gradient(127deg, rgba(255,84,84,.8), rgba(180,198,206,0.17) 70.71%), 
                linear-gradient(336deg, rgba(255,231,182,.9), rgba(230,201,190,0.42) 70.71%)
                ${(props) => (props.transparency ? `` : `,white`)};
    opacity:  ${(props) => (props.transparency ? 0.6 : 1)};

    transition: 2s;
    animation-fill-mode: both;
    animation: ${spin} 2s linear;
    box-shadow: 0 0 20px rgb(0 0 0 / 30%);
`;


const Canvas = ({ removeLogo, setRemoveLogo }) => {
    const [showCanvas, setShowCanvas] = useState(false);

    return (
        <WarpCube>
            {!showCanvas && <VerticalLine onAnimationEnd={()=>setShowCanvas(true)}/>}
            {removeLogo && <Introduce />}
            {showCanvas && <Background transparency={removeLogo} onAnimationEnd={()=>setRemoveLogo(true)}/>}
        </WarpCube>
    )

}

export default Canvas;