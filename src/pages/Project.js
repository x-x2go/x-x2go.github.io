import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import placeNow from '../assets/place_now.jpg';
import gotube from '../assets/gotube_.jpg';

const Wrap = styled.div`
    ${({theme})=>theme.common.pageWrap};
    opacity:${({active})=> active ? 1 : 0};
`
const Block = styled.div`
    width: 100vw;
    height: 50rem;
    ${({theme})=>theme.common.absCenter};
    ${({theme})=>theme.common.block};
    .content{
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 2rem;
    }
    .project{
        display: grid;
        grid-template-columns: 1fr 1fr;
        &:nth-child(odd){
            h2{
                margin-left: -1rem;
            }
        }
        &:nth-child(even){
            h2{
                justify-self: end;
                margin-right: -1rem;
            }
        }
    }
    img{
        width: 28rem;
    }
    h2{
        display: inline-block;
        align-self: flex-end;
        font-style: italic;
        z-index: 2;
        margin-bottom: 1rem;
    }
`


const Project = ({ active }) => {
    return (
        <Wrap className='page' active={active}>
            <Block>
                <div className="halftitle"><h1>Project</h1></div>
                <div className="content">
                    <div className="project">
                        <div><img src={placeNow} alt='place now' /></div>
                        <h2>Place now</h2>
                    </div>
                    <div className="project">
                        <h2>Gotube</h2>
                        <div><img src={gotube} alt='gotube' /></div>
                    </div>
                </div>
            </Block>
        </Wrap>
    )
}

export default Project;