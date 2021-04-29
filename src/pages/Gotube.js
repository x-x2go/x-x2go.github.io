import React from 'react';
import styled from 'styled-components';
import gotubeGif from '../assets/gotube_vidio.gif';


const skills = ['ES6', 'Sass(SCSS)', 'Pug', 'Node.js', 'Express.js', 'Passport.js', 'Webpack', 'MongoDB'];
const details = [
                 'Passport를 사용하여 인증 시스템을 구현 (Github, Kakao, Google과 연동하여 가입 가능)', 
                 'MongoDB를 사용하여 user 목록과 user별로 업로드한 video 관리',
                 'MVC모델을 이용해 전체적인 프로젝트 설계',
                 '회원 가입, 로그인, Video 업로드, 수정, 삭제, 탈퇴 기능 구현',
                 '로고 및 전체적인 UI 설계'
                ];

const Item = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;

    .item__img{
        img{
            width: 27rem;
            margin-bottom: 2rem;
        }
    }
    .item__content{
        div{
            margin-bottom: 2rem;
        }
    }
    .intro, .detail{
        p{
                margin: 0.5rem 0;
                line-height: 1.5rem;
        }
        ul{
            list-style-type: disc;
            margin: 0.5rem 0;
            line-height: 1.5rem;
            font-size: 1.125rem;
            padding-left: 1.6rem;
            li{
                margin-bottom: 0.4rem;
            }
        }
    }
    .skills{
        p{
            width:fit-content;
            height: fit-content;
            background-color: ${({theme})=>theme.colors.black};
            padding: 0.2rem 0.5rem;
            font-family: 'Raleway';
            margin:0.2rem;
            border-radius: 0.2rem;
            display: inline-block;
            color: ${({theme})=>theme.colors.beige};
            font-size: 1rem;
        }
    }

    .link{
        margin-top: 4rem;
        i{
        font-size: 2.5rem;
        }
    }

`;


const Gotube =() => {
    return(
        <Item>
            <div className='item__img'>
                <img src={gotubeGif} alt='gotube 실행 gif'/>
            </div>
            <div className='item__content'>
                <div className='intro'>
                    <p>Gotube는 YOUTUBE를 모티브로 한 비디오 공유 사이트입니다.</p>
                </div>
                <div className='skills'>{skills.map(x=><p key={x}>{x}</p>)}</div>
                <div className='detail'><ul>{details.map(x=><li key={x}>{x}</li>)}</ul></div>
                <div className='link'><a href='https://github.com/x-x2go/gotube' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
            </div>
        </Item>
    )
}

export default Gotube;