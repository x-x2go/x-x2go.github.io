import React, { useState } from 'react';
import Logo from './Logo';
import Canvas  from './Canvas';
import styled from 'styled-components';
import background from '../assets/background.jpg';


const Wrap = styled.div`

    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    position: relative;

`

const Main = () => {
    const [showLine, setShowLine] = useState(false);
    const [removeLogo, setRemoveLogo] = useState(false);

    return (
        <Wrap>
            { showLine && <Canvas removeLogo={removeLogo} setRemoveLogo={setRemoveLogo}/>}
            { !removeLogo && <Logo setShowLine={setShowLine}/>}
        </Wrap>
    )
}

export default Main;