import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    ${({theme})=>theme.common.pageWrap};
    opacity:${({active})=> active ? 1 : 0};
`
const LogoSvg = styled.svg`
    width: 23rem;
    fill-rule: evenodd;
    clip-rule:evenodd;
    stroke-linecap:round;
    stroke-linejoin:round;

    & .path{
        fill: none;
        stroke: ${({theme})=>theme.colors.black};
    }

`

const Block = styled.div`
    width: 80vw;
    height: 100vh;
    ${({theme})=>theme.common.absCenter};
    .content{
        ${({theme})=>theme.common.absCenter};
        text-align: center;
    }
    .footer{
        width: inherit;
        height: 12rem;
        position: absolute;
        bottom: 0px;
        display: grid;
        grid-template-rows: 1fr 1fr;
    }

    .halftitle{
        
        border-bottom: 0.15rem solid ${({theme})=>theme.colors.red};
        line-height: 0.8rem;
        h1{
            writing-mode: initial;
            transform: none;
            margin-left: -3rem;
            display: inline-block;
            line-height: 6rem;
        }

        .contectby{
            float: right;
            width: 8rem;
            text-align: right;
            div{
                margin-bottom: 1rem;
            }
            i{
                margin-left: 0.5rem;
            }
        }
    }
`

const Contect = ({ active }) => {
    return (
        <Wrap active={active}>
            <Block>
                <div className="content">
                    <div>
                    <LogoSvg viewBox="200 300 1700 450">
                        <path className="path" strokeWidth="8" d="M599.822+505.055C599.822+505.055+522.492+526.269+598.453+435.937C674.414+345.606+694.259+437.99+649.094+515.32C603.928+592.649+562.183+635.078+549.181+605.652C536.179+576.225+619.667+591.965+644.988+602.23C670.308+612.495+733.951+604.283+744.9+596.071M691.509+550.355C691.509+550.355+762.68+536.669+753.783+503.821C744.887+470.973+660.03+562.673+723.673+561.305C787.316+559.936+860.539+522.298+861.908+497.662C863.276+473.026+766.101+532.563+823.585+564.726C881.069+596.89+982.35+501.083+982.35+501.083C982.35+501.083+923.498+510.664+928.288+555.146C933.078+599.627+1011.09+500.399+1015.88+491.503C1020.67+482.606+992.615+673.535+913.233+661.217C833.85+648.899+1125.38+477.132+1134.27+493.556C1134.27+493.556+1054.2+554.461+1117.85+551.724C1181.49+548.987+1141.11+463.445+1119.9+494.924C1098.69+526.404+1137.96+545.855+1215.71+544.196C1269.07+543.058+1281.94+479.326+1234.18+503.136C1189.48+525.427+1187.65+625.632+1352.45+490.134C1352.45+490.134+1290.05+645.477+1407.07+489.45C1407.07+489.45+1361.22+616.735+1485.08+500.399L1461.82+563.358C1461.82+563.358+1568.67+415.817+1528.76+538.037C1517.81+571.57+1604.9+528.709+1616.35+522.982"/>
                    </LogoSvg>
                    </div>
                    <div><h3>xxxvi_@naver.com</h3></div>
                </div>
                <div className="footer">
                    <div className="halftitle">
                        <h1>Contect</h1>
                        <div className="contectby">
                            <div><h3>github</h3><i className="fas fa-external-link-alt"></i></div>
                            <div><h3>blog</h3><i className="fas fa-external-link-alt"></i></div>
                        </div>
                    </div>
                    
                </div>
            </Block>
        </Wrap>
    )
}

export default Contect;