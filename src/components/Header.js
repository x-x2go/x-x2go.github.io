import React from 'react';
import { Link } from 'react-scroll';
import styled, { keyframes } from 'styled-components';
import BubbleFilter from '../style/BubbleFilter'


const categories = [
    {
        name: 'skill'
    },
    {
        name: 'project'
    },
    {
        name: 'contect'
    }
];

const flow = keyframes`
    0% {
        left: 0px;
        width: 2rem;
        height: 2rem;
    }
  
    80%{
        width: 2rem;
        height: 2rem;
    }
    100%{
        left: 3.12rem;
        width: 2.5rem;
        height: 2.5rem;
    }
`

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

const Nav = styled.div`
    width: 30rem;
    height: 3.125rem;
    position: absolute;
    top: 0rem;
    right:0rem;
    z-index:10;
    a{
        &:nth-child(2){
            div{
            animation-delay: .3s;
                p{
                    animation-delay: .6s;
                }
            }
        }
        &:nth-child(3){
            div{
            animation-delay: .6s;
                p{
                    animation-delay: .9s;
                }
            }
        }  
    }
    
`;

const Bubble = styled.div`
    -webkit-filter: url('#liquid');
     filter: url('#liquid');
     position: relative;
     top:-2.2rem;
     left: -1.65rem;
    
`

const Category = styled(Link)`
    
    .wrap{
        display: inline-block;
        font-family: 'Orelega One', sans-serif;
        font-style: italic;
        font-size: ${({ theme }) => theme.fontSize.subtitle};
        line-height: ${({ theme }) => theme.fontSize.subtitle};
        width: 6.25rem;
        height: 1.5rem;
        margin-right: 2rem;
        padding: 1rem .6rem 1rem;
        position: relative;
        cursor: pointer;
        border-left: .125rem solid ${({ theme }) => theme.colors.black};
        overflow: hidden;
        animation: ${showLine} .3s linear;
        animation-fill-mode: both;
        
        p{
            position: relative;
            z-index: 5;
            animation: ${showUp} .5s linear .3s;
            animation-fill-mode: both;
        }

        &:hover{
            .from{
                width: 1rem;
                height: 2.5rem;
                position: relative;
                background-color: ${({ theme }) => theme.colors.red};
            }
            .bubble{
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 100%;
                background-color: ${({ theme }) => theme.colors.red };
                position: relative;
                top: -2.2rem;
                left: 3.12rem;
                animation: ${flow} 1s cubic-bezier(.5,.19,.66,.12);
            }
        }
    }

`;

const Header = ({ finProlog }) => {

    return (
        <Nav>
            { finProlog && categories.map(x => (
                <Category aciveClass='active' to={x.name} spy={true} smooth={true}>
                    <div className='wrap'>
                        <p>{x.name}</p>
                        <Bubble>
                            <div className='from'/>
                            <div className='bubble'/>
                        </Bubble>
                    </div>
                </Category>
            ))}
            <BubbleFilter/>
        </Nav>
    )
}

export default Header; 