import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Introduce from './Introduce';


const drawLine = keyframes`
    from{
        height: 0rem;
    }
    to{
        height: 17rem;
    }
`

const WarpCube = styled.div`
    width: 50rem;
    height: 16rem;
    ${({ theme }) => theme.common.absCenter}
    z-index: 4;
    
`;
const VerticalLine = styled.div`
    width: .6rem;
    height: 17rem;
    border-left: 0.125rem solid ${({ theme }) => theme.colors.black}; 
    margin: 0 auto;
    animation: ${drawLine} 2s linear;
`;

const moveLeft = keyframes`
    from{
        right: -25rem;
    }
    to{
        right: 0rem;
    }
`
const moveRight = keyframes`
    from{
        left: -25rem;
    }
    to{
        left: 0rem;
    }
`;

const lengthen = keyframes`
    0%{
        width: 0rem;
    }
    5%{
        width: 0rem;
    }
    60%{
        width: 23rem;
    }
    80%{
        width: 45rem;
    }
    100%{
        width: 50rem;
    }
`;

const Erease = styled.div`
    background: ${({ theme }) => theme.colors.beige};
    animation: ${lengthen} 1.9s cubic-bezier(0.605, 0.235, 0.680, 0.790);
    animation-fill-mode: both;
    height: 25rem;
    ${({ theme }) => theme.common.absCenter}
`;

const Bracket = styled.div`
    width: 50rem;
    height: 25rem;
    ${({ theme }) => theme.common.absCenter}
    z-index: 5;
    div{
        width:25rem;
        height: 25rem;
        overflow: hidden;
        display: inline-block;
        font-weight: 300;
    }
    .open{
            p{
                float:left;
                width:fit-content;
                height:fit-content;
                position:relative;
                font-size: 19rem;
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
                font-size: 19rem;
                animation: ${moveRight} 2s linear;
            }
        }
    
`
const open = "{";
const close = "}";
const Canvas = ({ removeLogo, setRemoveLogo, setFinProlog }) => {
    const [showCanvas, setShowCanvas] = useState(false);

    return (
        <WarpCube>
            {!showCanvas && <VerticalLine onAnimationEnd={()=>setShowCanvas(true)}/>}
            {removeLogo && <Introduce setFinProlog={setFinProlog}/>}
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