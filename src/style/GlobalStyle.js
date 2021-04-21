import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body{
        background: ${({ theme }) => theme.colors.beige};
        color:${({theme})=>theme.colors.black};
    }

    h1{
        font-size: 10rem;
        font-family: 'Orelega One', sans-serif;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
        color: ${({ theme }) => theme.colors.beige};
        -webkit-text-stroke: 0.15rem;
        -webkit-text-stroke-color: ${({theme})=>theme.colors.red};
        
    }

    h2{
        font-size: ${({theme})=>theme.fontSize.halftitle};
        font-family: 'Orelega One', sans-serif;
    }

    h3{
        font-size: ${({theme})=>theme.fontSize.subtitle};
        font-family: 'Orelega One', sans-serif;
        line-height: 1.5rem;
        display: inline-block;
    }

`

export default GlobalStyle;