import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Introduce from './Introduce';


const drawLine = keyframes`
    from{
        height: 1px;
    }
    to{
        height: 300px;
    }
`

const WarpCube = styled.div`
    width: 800px;
    height: 270px;
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
    height:270px;
    border-left: 2px solid #3E3E40; 
    margin: 0 auto;
    animation: ${drawLine} 2s linear;
`;

const moveLeft = keyframes`
    from{
        right: -400px;
    }
    to{
        right: 0px;
    }
`
const moveRight = keyframes`
    from{
        left: -400px;
    }
    to{
        left: 0px;
    }
`;

const lengthen = keyframes`
    from{
        width: 0px
    }
    to{
        width: 800px;
    }
`;

const Erease = styled.div`
    background: #EDEEE9;
    height:300px;
    animation: ${lengthen} 1.9s cubic-bezier(0.605, 0.235, 0.680, 0.790);
    width: 800px;
    height: 400px;
    position: absolute;
    transform:translate(-50%, -50%);
    top: 50%;
    left: 50%;
`;

const Bracket = styled.div`
    width: 800px;
    height: 400px;
    position: absolute;
    transform:translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 5;
    div{
        width:400px;
        height: 400px;
        overflow: hidden;
        display: inline-block;
        font-size: 300px;
        font-weight: 300;
    }
    .open{
            p{
                float:left;
                width:fit-content;
                height:fit-content;
                position:relative;
                animation: ${moveLeft} 2s linear;
            }
        }
        .close{
            p{
                float: right;
                text-align:right;
                width:fit-content;
                height: fit-content;
                position:relative;
                animation: ${moveRight} 2s linear;
            }
        }
    
`
const open = "{";
const close = "}";
const Canvas = ({ removeLogo, setRemoveLogo }) => {
    const [showCanvas, setShowCanvas] = useState(false);

    return (
        <WarpCube>
            {!showCanvas && <VerticalLine onAnimationEnd={()=>setShowCanvas(true)}/>}
            {removeLogo && <Introduce />}
            {showCanvas && <Bracket onAnimationEnd={()=>setRemoveLogo(true)}>
                    <div className="open">
                        <p >{open}</p>
                    </div>
                    <div className="close">
                        <p >{close}</p>
                    </div>    
                </Bracket>}
            {showCanvas && <Erease/>}
        </WarpCube>
    )

}

export default Canvas;