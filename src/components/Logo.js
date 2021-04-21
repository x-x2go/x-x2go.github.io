import React from 'react';
import styled, { keyframes } from 'styled-components';

const Logos = styled.div`
    width: 50rem;
    height: 28rem;
    position: absolute;
    transform:translate(-50%, -50%);
    top: 50%;
    left: 50%;
`

const dash = keyframes`
    from {
        stroke-dashoffset: 3000;
    }
    to {
        stroke-dashoffset: 0;
    }
`

const LogoSvg = styled.svg`
    width: 100%;
    fill-rule: evenodd;
    clip-rule:evenodd;
    stroke-linecap:round;
    stroke-linejoin:round;
    ${({ theme }) => theme.common.absCenter}
    z-index: 2;

    & .path{
        fill: none;
        stroke: #ff5252;
        stroke-dasharray: 3000;
        stroke-dashoffset: 1000;
        animation: ${dash} 3s linear forwards;
    }

`

const grow = keyframes`
    from{
        padding-left: 0rem;
        padding-bottom: 0rem;
    }
    to{
        padding-left: 2rem;
        padding-bottom: 2rem;
    }
`;

const SHADOW_COLOR = '#3E3E40';
const shadow = Array.apply(null, new Array(100)).map((x, i)=> SHADOW_COLOR+" -"+i+"px "+i+"px").join(",");

const LogoText = styled.div`
    padding:  2rem;
    overflow: hidden;
    margin: 0rem auto;
    width: 22rem;
    font-size: ${({ theme }) => theme.fontSize.title};;
    position: absolute;
    transform:translate(-50%, -50%);
    bottom: 25%;
    left: 50%;
    color: ${({ theme }) => theme.colors.beige};
    font-family: 'Orelega One', cursive;
    text-shadow: ${shadow};
    animation: ${grow} 0.5s linear;

`

const Logo = ({ setShowLine }) => {

    return (
        <Logos>
            <LogoSvg viewBox="130 0 1920 1020" onAnimationEnd={()=>setShowLine(true)}>
                <path className="path" strokeWidth="9" d="M599.822+505.055C599.822+505.055+522.492+526.269+598.453+435.937C674.414+345.606+694.259+437.99+649.094+515.32C603.928+592.649+562.183+635.078+549.181+605.652C536.179+576.225+619.667+591.965+644.988+602.23C670.308+612.495+733.951+604.283+744.9+596.071M691.509+550.355C691.509+550.355+762.68+536.669+753.783+503.821C744.887+470.973+660.03+562.673+723.673+561.305C787.316+559.936+860.539+522.298+861.908+497.662C863.276+473.026+766.101+532.563+823.585+564.726C881.069+596.89+982.35+501.083+982.35+501.083C982.35+501.083+923.498+510.664+928.288+555.146C933.078+599.627+1011.09+500.399+1015.88+491.503C1020.67+482.606+992.615+673.535+913.233+661.217C833.85+648.899+1125.38+477.132+1134.27+493.556C1134.27+493.556+1054.2+554.461+1117.85+551.724C1181.49+548.987+1141.11+463.445+1119.9+494.924C1098.69+526.404+1137.96+545.855+1215.71+544.196C1269.07+543.058+1281.94+479.326+1234.18+503.136C1189.48+525.427+1187.65+625.632+1352.45+490.134C1352.45+490.134+1290.05+645.477+1407.07+489.45C1407.07+489.45+1361.22+616.735+1485.08+500.399L1461.82+563.358C1461.82+563.358+1568.67+415.817+1528.76+538.037C1517.81+571.57+1604.9+528.709+1616.35+522.982"/>
            </LogoSvg>
            <LogoText>PORTFOLIO</LogoText>
        </Logos>
    )
}

export default Logo;