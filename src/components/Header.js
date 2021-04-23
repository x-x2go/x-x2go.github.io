import React from 'react';
import { Link, scroller, } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import Cursor from './Cursor';


const categories = ['main','skill','project','contect'];

const showLine = keyframes`
    from{
        top: -3rem;
    }
    to{
        top: 0rem;
    }
`

const showUp = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }

`
const animationLoop = i => (
    `&:nth-child(${i + 1}){
    div{
        animation-delay: ${0.3 * i}s;
            p{
                animation-delay:${0.3 * (i + 1)}s;
            }
        }
}`);

const getAnimation = () => {
    let str = '';
    for(let i = 0; i < 4; i++){
        str += animationLoop(i);
    }
    return str;
};


const Nav = styled.div`
    width: 38rem;
    height: 3.125rem;
    position: fixed;
    top: 0rem;
    right:0rem;
    z-index:10;
    a{
        ${getAnimation()}
    }
    
`;

const blob = keyframes`
    0%, 100% { border-radius: 43% 77% 80% 40% / 40% 40% 80% 80%; }
	20% { border-radius: 47% 73% 61% 59% / 47% 75% 45% 73%; }
	40% { border-radius: 46% 74% 74% 46% / 74% 58% 62% 46%; }
	60% { border-radius: 47% 73% 61% 59% / 40% 40% 80% 80%; }
	80% { border-radius: 50% 70% 52% 68% / 51% 61% 59% 69%; }
`

const Category = styled(Link)`
    
    .wrap{
        display: inline-block;
        font-family: 'Orelega One', sans-serif;
        font-style: italic;
        font-size: ${({ theme }) => theme.fontSize.subtitle};
        line-height: ${({ theme }) => theme.fontSize.subtitle};
        width: 6rem;
        height: 1.5rem;
        margin-right: 2rem;
        padding: 1rem .6rem 1rem;
        position: relative;
        cursor: pointer;
        border-left: .125rem solid ${({ theme }) => theme.colors.black};
        overflow: hidden;
        animation: ${showLine} .3s linear;
        animation-fill-mode: both;
        
        h3{
            position: relative;
            z-index: 5;
            animation: ${showUp} .5s linear .3s;
            animation-fill-mode: both;
        }

        &:hover{
            text-align: center;

            h3{
                transition: 1s;
                font-size: 1.7rem;
                
            }
             .cursor {
                width: 40px;
                height: 40px;
                background-color: ${({ theme }) => theme.colors.red };
                position: fixed;
                transform: translate(-50%, -50%);
                mix-blend-mode: screen;
                pointer-events: none;
                animation: ${blob} 5s ease infinite;
            }
        }

        
    }
    &.active{
        .wrap{
            text-align: center;
                h3{
                    transition: 1s;
                    font-size: 1.7rem;

                }
                
                .cursor{
                    mix-blend-mode: screen;
                    background-blend-mode: difference;
                    background-color: brown;
                }

            &::after{
                    content:'';
                    width: 5rem;
                    border-bottom: 0.125rem solid ${({ theme }) => theme.colors.red };;
                    ${({ theme }) => theme.common.absCenter };
                }    
        }
                
    }
   
`;

const Header = ({ finProlog, setActivePage, handlePageChange }) => {

    return (
        <Nav>
            { finProlog && categories.map((name, i) => (
                <Category aciveclass='active' key={name} to={name} onClick={()=>handlePageChange(i)} spy={true} smooth={true} >
                    <div className='wrap'>
                        <h3>{name}</h3>
                        <Cursor/>
                    </div>
                </Category>
            ))}
        </Nav>
    )
}

export default Header; 