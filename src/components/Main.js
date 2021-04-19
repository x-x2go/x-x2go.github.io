import React, { useState } from 'react';
import Logo from './Logo';
import Canvas  from './Canvas';
import styled, { keyframes } from 'styled-components';


const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.colors.beige};
    position: relative;
`

const mouseScroll = keyframes`
    0%   { opacity: 0; }
    50%  { opacity: .5; }
    100% { opacity: 1; }
`;

const ScrollDown = styled.div`
    position: absolute;
    left: 50%;
    bottom: 3.5rem;
    .arrows{
        transform: rotate(45deg);
        border-right: .125rem solid ${({ theme }) => theme.colors.black};
        border-bottom: .125rem solid ${({ theme }) => theme.colors.black};
        width: 2rem;
        height: 2rem;
        animation: ${mouseScroll} 1s infinite;
        &:nth-child(1){
            animation-direction: alternate;
            animation-delay: alternate;
            }
        &:nth-child(2){
            animation-delay: .2s;
            animation-direction: alternate;
            margin-top: -1.5rem;
            }
    }
`;
const Main = ({ finProlog, setFinProlog }) => {
    const [showLine, setShowLine] = useState(false);
    const [removeLogo, setRemoveLogo] = useState(false);

    return (
        <Wrap>
            { showLine && <Canvas removeLogo={removeLogo} setRemoveLogo={setRemoveLogo} setFinProlog={setFinProlog}/>}
            { !removeLogo && <Logo setShowLine={setShowLine}/>}
            { finProlog && <ScrollDown>
                <div className='arrows'/>
                <div className='arrows'/>
            </ScrollDown>}
        </Wrap>
    )
}

export default Main;