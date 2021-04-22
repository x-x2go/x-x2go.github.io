import React from 'react';
import styled from 'styled-components';
import searchGif from '../assets/placenow_search_vidio.gif';
import detailGif from '../assets/placenow_detail_vidio.gif';
import gotubeGif from '../assets/gotube_vidio.gif';


const project_name ={
    'place_now' : {
        'name': 'Place now',
        'year': '2021',
        'introduce': ["Place now는 ‘영업시간’에 초점을 맞춘 지도사이트로 근처에서 특정 시간에 영업 중인 가게들을 찾고 싶을 때 유용합니다.","❗ Google maps API를 사용하여 개발하였습니다."],
        'skill': ['React', 'HTML', 'CSS', 'ES6', 'Webpack'],
        'detail': ['장소 타입별로 카테고리를 나눠서 지도에 Marker로 표시', 
                '특정 시간에 영업중인 가게 정보만을 나타내는 알고리즘 구축',
                'overlay를 이용해 Marker를 클릭시 지도에 info-window 생성',
                '원하는 장소의 세부 정보를 side bar에 나타냄',
                '상황에 따라 marker icon을 다양하게 변경',
                'React Router를 통해 라우팅을 구현'],
        'github': 'https://github.com/x-x2go/placeNow_2.0',
        "img": [searchGif, detailGif],
    },

        'gotube' : {
        'name': 'Gotube',
        'year': '2020',
        'introduce': ["Gotube는 YOUTUBE를 모티브로 한 비디오 공유 사이트입니다."],
        'skill': ['ES6', 'Sass(SCSS)', 'Pug', 'Node.js', 'Express.js', 'Passport.js', 'Webpack', 'MongoDB'],
        'detail': ['Passport를 사용하여 인증 시스템을 구현 (Github, Kakao, Google과 연동하여 가입 가능)', 
                'MongoDB를 사용하여 user 목록과 user별로 업로드한 video 관리',
                'MVC모델을 이용해 전체적인 프로젝트 설계',
                '회원 가입, 로그인, Video 업로드, 수정, 삭제, 탈퇴 기능 구현',
                '로고 및 전체적인 UI 설계'],
        'github': 'https://github.com/x-x2go/gotube',
        "img": [gotubeGif],
    },

};
    


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


const ProjectItem =({name}) => {
    const target = project_name[name];
    return(
        <Item>
            <div className='item__img'>
                {target['img'].map(x=><img key={x} src={x} alt='project gif 입니다'/>)}
            </div>
            <div className='item__content'>
                <div className='intro'>
                    {target['introduce'].map(x=><p key={x}>{x}</p>)}
                </div>
                <div className='skills'>{target['skill'].map(x=><p key={x}>{x}</p>)}</div>
                <div className='detail'><ul>{target['detail'].map(x=><li key={x}>{x}</li>)}</ul></div>
                <div className='link'><a href={target['github']} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div>
            </div>
        </Item>
    )
}

export default ProjectItem;