import React from 'react';
import styled from 'styled-components';
import category from '../../assets/category.png';
import markers from '../../assets/markers.png';
import detailSearch from '../../assets/detailsearch.png';



const Item = styled.div`
    ${({theme})=>theme.common.item}
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    transform: ${({target})=> target? 'translateX(0)' : 'translateX(-60rem)'};
    div{
        &:nth-child(3) {
        grid-column: 1 / span 2;
        }
    }
    
    .item__img{
        img{
            width: 25em;
        }
    }

    .item__content{
        img{
            width: 30rem;
        }
        ul{
            padding-left: 3rem;
        }
    }

    ul{
        list-style-type: decimal;
        margin: 3rem 0;
        line-height: 1.5rem;
        font-size: 1.125rem;
        padding-left: 1.6rem;
        li{
            margin-bottom: 0.5rem;
            padding-left: 0.5rem;
        }
    }
    

`;


const SecondPage =({target}) => {
    return(
        <Item target={target}>
            <div className="item__img"><img src={category} alt='카테고리 이미지'/></div>
            <div className="item__content">
                <img src={markers} alt='marker 이미지'/>
                <ul>
                    <li>
                        장소 타입 별로 카테고리가 나눠져 있습니다<br/>
                        Marker 또한 카테고리에 따라 다르게 표시됩니다.
                    </li>
                    <li> 특정 장소를 찾고 싶다면 검색창을 이용하세요.</li>
                </ul>
            </div>
            <div>
                <img src={detailSearch} alt='세부 검색 바 이미지'/>
                <ul>
                    <li><strong>현재영업중</strong>버튼을 누르면 버튼이 활성화되며 현재 영업중인 가게들만 지도에 표시됩니다.
                    </li>
                    <li><strong>timeSelection</strong>을 통해 세부적인 시간을 검색할 수 있습니다.</li>
                    <li>다른 위치에서 검색을 이어가고 싶다면, 원하는 위치로 이동 후 <strong>현재 위치에서 검색</strong> 버튼을 누르세요.</li>
                </ul>
            </div>
        </Item>
    )
}

export default SecondPage;