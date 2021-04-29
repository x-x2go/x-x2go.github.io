import React, {useState} from 'react';
import styled, { keyframes, css } from 'styled-components';
import FirstPage from './placenow/FirstPage';
import SecondPage from './placenow/SecondPage';
import ThirdPage from './placenow/ThirdPage';


const goPrev = keyframes`
    from{
        left: 0.3rem;
    }
    to{
        left: 0;
    }
`;

const goNext = keyframes`
    from{
        right: 0.3rem;
    }
    to{
        right: 0;
    }
`;

const PrevBtn = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 25rem;
    left: 0;
    margin-left: 1rem;
    cursor: pointer;
    z-index: 4;
    ${({isLast})=>isLast && css`animation: ${goPrev} 1s infinite ease-in-out;`}

    i{
        font-size: 2rem;
    }

`;
const NextBtn = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 25rem;
    right: 0;
    margin-right: 1rem;
    cursor: pointer;
    z-index: 4;
    animation: ${goNext} 1s infinite ease-in-out; 
    i{
        font-size: 2rem;
    }

`;


const PlaceNow =() => {
    const [pageNumber, setPageNumber] = useState(1);

    const clickPrev = () => {
        setPageNumber(current => current - 1);
    }

    const clickNext = () => {
        setPageNumber(current => current + 1);
    }

    return(
        <>
            {!(pageNumber === 1) && <PrevBtn onClick={clickPrev} isLast={pageNumber === 3}><i className="fas fa-arrow-circle-left"></i></PrevBtn>}
            {!(pageNumber === 3) &&<NextBtn onClick={clickNext} ><i className="fas fa-arrow-circle-right"></i></NextBtn>}
            <FirstPage target={pageNumber === 1}/>
            <SecondPage target={pageNumber === 2}/>
            <ThirdPage target={pageNumber === 3}/>
        </>
    )
}

export default PlaceNow;