import React from 'react';
import styled from 'styled-components';
import Icon from '../assets/icons/Icon';

const familiar = [
    {
        name: "js",
        text: "JavaScript(ES6+)",
    },
    {
        name: "html",
        text: "HTML",
    },
    {
        name: "css",
        text: "CSS",
    },
    {
        name: "react",
        text: "REACT",
    },
    {
        name: "styled",
        text: "Styled-Component",
    },
];

const tried = [
    {
        name: "nodejs",
        text: "Node.js",
    },
    {
        name: "express",
        text: "Express.js",
    },
    {
        name: "mongodb",
        text: "MongoDB",
    },
];

const Wrap = styled.div`
    ${({theme})=>theme.common.pageWrap};
    opacity:${({active})=> active ? 1 : 0};
`;

const SkillBlock = styled.div`
    width: 100vw;
    height: 40rem;
    ${({theme})=>theme.common.absCenter};
    ${({theme})=>theme.common.block};

    .halftitle, .content{
        display: inline-block;
        
    }

    .halftitle{
        text-align: center;
        h1{
            height: 40rem;
        }
    }

    .content{
        width: 50vw;
        text-align: left;
        div {
            margin: 2rem 0;
            h2{
                margin: 1rem;
            }
            p{
                width: fit-content;
                display: inline-block;
                margin: 0.5rem 1rem;
                
            }
        }

        h3{
            padding-left: 0.5rem;
            font-family: 'Raleway';
            font-size: ${({theme})=>theme.fontSize.subtitle};
            line-height: 1.5rem;
            display: inline-block;
        }

    }
    
`;

const Skill = ({ active }) => {
    const skills = (skill) => skill.map(x=>(<p key={x.name} id={x.name}><Icon name={x.name}/> {x.text}</p>))

    return (
        <Wrap active={active}>
            <SkillBlock>
                <div className="halftitle"><h1>Skill</h1></div>
                <div className="content">
                    <div>
                        <h2>familiar</h2>
                        {skills(familiar)}
                    </div>
                    <div>
                        <h2>Tried</h2>
                        {skills(tried)}
                    </div>
                </div>
                
            </SkillBlock>
        </Wrap >
    )
}

export default Skill;