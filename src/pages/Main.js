import React, { useState } from 'react';
import Logo from '../components/Logo';
import Canvas  from '../components/Canvas';
import styled from 'styled-components';

const Wrap=styled.div`
    ${({theme})=>theme.common.pageWrap};
    opacity:${({active})=> active ? 1 : 0};
`

const Main = ({ finProlog, setFinProlog, active }) => {
    const [showLine, setShowLine] = useState(false);
    const [removeLogo, setRemoveLogo] = useState(false);


    return (
        <Wrap className='page' active={active}>
            { showLine && <Canvas removeLogo={removeLogo} setRemoveLogo={setRemoveLogo} setFinProlog={setFinProlog}/>}
            { !removeLogo && <Logo setShowLine={setShowLine}/>}
        </Wrap>
    )
}

export default Main;