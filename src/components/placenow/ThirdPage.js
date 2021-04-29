import React from 'react';
import styled from 'styled-components';
import detailGif from '../../assets/placenow_detail.gif';



const Item = styled.div`
    ${({theme})=>theme.common.item}
    grid-template-rows: auto;
    transform: ${({target})=> target? 'translateX(0)' : 'translateX(-60rem)'};
    
    .item__img{
        text-align: center;
        img{
            width: 52rem;
        }
    }

    .item__text{
        margin-left: 2rem;

        p{
        margin-bottom: 1rem;
        }
    }

    strong{
        &::after{
            border-radius: 100%;
            width: 1.5rem;
            height: 1.5rem;
            padding: 0;
        }
    }

`;


const ThirdPage =({target}) => {
    return(
        <Item target={target}>
           <div className="item__img"><img src={detailGif} alt='장소 세부 정보 나타남'/></div>
           <div className="item__text">
               <p>
                   Marker를 클릭하면 해당 장소의 정보가 간략하게 나타납니다.<br/> 
                   더 많은 정보를 보고싶다면, 가게 이름 옆의 <strong>&gt;</strong> 버튼을 눌러주세요.<br/>
                </p>
                <p>
                    <strong>&gt;</strong> 버튼을 누르면 side Bar에 가게의 상세 정보가 표시됩니다.<br/> 
                    현재 영업중인지도 실시간으로 표시됩니다.
                </p>
           </div>
        </Item>
    )
}

export default ThirdPage;