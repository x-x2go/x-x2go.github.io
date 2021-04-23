import React from 'react';
import styled, { keyframes } from 'styled-components';

const mouseScroll = keyframes`
    0%   { opacity: 0; }
    50%  { opacity: .5; }
    100% { opacity: 1; }
`;



const ScrollTo = styled.div`
    position: absolute;
    left: 50%;
    bottom: ${({lastPage})=>lastPage ? `1.8rem` : `3.5rem`};
    cursor: pointer;
    .arrows{
        transform: ${({lastPage})=>lastPage ? `rotate(225deg)` : `rotate(45deg)`};
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

const isLastPage = i => i === 3;

const Footer = ({currentPage, handlePageChange}) => {

    const scrollPage = (index) => {
        handlePageChange(isLastPage(index)? 0 : index + 1);
    }

    return (
        <ScrollTo lastPage={isLastPage(currentPage)} onClick={()=>scrollPage(currentPage)}>
            <div className='arrows'/>
            <div className='arrows'/>
        </ScrollTo>
    );

};

export default Footer;