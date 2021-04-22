import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import Modal from 'react-modal';
import ProjectItem from './ProjectItem';
import placeNow from '../assets/place_now.jpg';
import gotube from '../assets/gotube_.jpg';
import placeNowPage from '../assets/temp_placenow.jpg';
import gotubePage from '../assets/temp_gotube.jpg';
import Cursor from '../components/Cursor';

const Wrap = styled.div`
    ${({theme})=>theme.common.pageWrap};
    opacity:${({active})=> active ? 1 : 0};
`;

const modalStyle = {
    overlay:{
        backgroundColor: 'rgba(0, 0, 0, .7)',
    }
};

const slideUp = keyframes`
    from{
        opacity: 0;
        top: 120%;
    }
    to{
        top: 50%;
        opacity: 1;
    }
`

const Popup = styled(Modal)`
        ${({theme})=>theme.common.absCenter};
        width: 60rem;
        height: 50rem;
        z-index: 10;
        border-radius: 1rem;
        background-color:${({theme})=>theme.colors.beige};
        animation: ${slideUp} 1s ease-out;

        .closeBtn{
            width: 3rem;
            height: 3rem;
            font-size: 2rem;
            line-height: 2rem;
            text-align: center;
            margin: 1rem;
            position: absolute;
            right: 0rem;
        }
`;

const blob = keyframes`
    0%, 100% { border-radius: 43% 77% 80% 40% / 40% 40% 80% 80%; }
	20% { border-radius: 47% 73% 61% 59% / 47% 75% 45% 73%; }
	40% { border-radius: 46% 74% 74% 46% / 74% 58% 62% 46%; }
	60% { border-radius: 47% 73% 61% 59% / 40% 40% 80% 80%; }
	80% { border-radius: 50% 70% 52% 68% / 51% 61% 59% 69%; }
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
            div{
                justify-self: end;
            }
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
    .image{
        width: 28rem;
        height: 18.75rem;
        cursor: none;

        &:hover{
            .cursor {
                width: 4rem;
                height: 4rem;
                background-color: ${({ theme }) => theme.colors.red };
                position: fixed;
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: ${blob} 5s ease infinite;
                z-index:999;

                &::after{
                    content:"click!";
                    font-size: 2rem;
                    color: ${({ theme }) => theme.colors.beige};
                    font-family: 'Orelega One', sans-serif;
                    margin-left: -1rem;
                    line-height: 4.5rem;
                    -webkit-text-stroke: 0.05rem;
                    -webkit-text-stroke-color: ${({theme})=>theme.colors.red};
                }
            }
        }

        img{
            width: 28rem;
            height: 18.75rem;
            transition: 1s;
            &:hover{
                opacity: 0;
            }
        }
        
    }
    .pn{
        background: url(${placeNowPage});
        background-size: cover;
    }
    .gt{
        background: url(${gotubePage});
        background-size: cover;
    }
    h2{
        display: inline-block;
        align-self: flex-end;
        font-style: italic;
        z-index: 2;
        margin-bottom: 1rem;
    }
`

Modal.setAppElement(document.getElementById('root'));

const Project = ({ active }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [projectName, setProjectName] = useState(null);

    const openModal = (e) =>{
        setProjectName(e.target.id);
        setModalIsOpen(true);
    }

    return (
        <Wrap className='page' active={active}>
            <Popup isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)} preventScroll={true} style={modalStyle}>
                <div className='closeBtn' onClick={()=> setModalIsOpen(false)}>✖</div>
                <ProjectItem name={projectName}/>
            </Popup>
            <Block>
                <div className="halftitle"><h1>Project</h1></div>
                <div className="content">
                    <div className="project">
                        <div onClick={openModal} className="image pn"><img src={placeNow} alt='place now' id="place_now" /><Cursor/></div>
                        <h2>Place now</h2>
                    </div>
                    <div className="project">
                        <h2>Gotube</h2>
                        <div onClick={openModal} className="image gt"><img src={gotube} alt='gotube' id="gotube" /><Cursor/></div>
                    </div>
                    
                </div>
            </Block>
                
            
        </Wrap>
    )
}

export default Project;