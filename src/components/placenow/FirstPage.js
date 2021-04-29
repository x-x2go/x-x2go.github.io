import React from 'react';
import styled from 'styled-components';
import mainGif from '../../assets/placenow_search.gif';


const skill = ['React', 'HTML', 'CSS', 'ES6', 'Webpack'];



const Item = styled.div`
    ${({theme})=>theme.common.item}
    grid-template-rows: 4.5rem;
    transform: ${({ target })=> target? 'translateX(0)' : 'translateX(-60rem)'};
    
    div{
        margin-bottom: 1rem;
        h2{
            display: inline-block;
        }
    }

    .link{
        margin-left: 2rem;
        display: inline-block;
        i{  
        font-size: 2.5rem;
        line-height: 3rem;
        }
    }

    .item__skills{
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
    .item__img{
        justify-self: center;
        img{
            width: 45rem;
        } 
    }

`;


const FirstPage =({ target }) => {
    return(
        <Item target={target}>
            <div>
                <h2>place now</h2>
                <div className='link'><a href='https://github.com/x-x2go/place_now_2.0' target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></div></div>
            <div><p>주변에서 새벽까지 영업하는 카페를 찾고 싶을 때, 브레이크 타임이 없는 식당을 찾을 때.<br/>
                일일dl 가게 하나하나씩을 살펴보며 영업시간을 확인하는게 불편하지는 않았나요?<br/></p>
                <p>내가 원하는 시간에 영업하는 가게들만 검색할 수 있으면 좋겠다는 생각에 'place Now'를 만들었습니다.</p>
            </div>
            <div className='item__skills'>{skill.map(x=><p key={x}>{x}</p>)}</div>
            <div><p>place now는 '영업시간'에 초점을 맞춘 지도 사이트로 근처에서 특정 시간에 영업중인 가게들을 찾고 싶을 때 유용합니다.</p></div>
            <div className="item__img"><img src={mainGif} alt='place now 동작 비디오'/></div>
        </Item>
    )
}

export default FirstPage;