import styled from 'styled-components';

const pixelToRem = size => `${size / 16}rem`;

const colors = {
    red: "#ff5252",
    black: "#3E3E40",
    beige: "#EDEEE9",
};

const fontSize = {
    base: pixelToRem(16),
    subtitle: pixelToRem(24),
    title: pixelToRem(70),
}

const common = {
    flexCenter: `
        display: flex;
        justify-contents: center;
        align-items: center;
    `,
    
    absCenter:`
        position: absolute;
        transform:translate(-50%, -50%);
        top: 50%;
        left: 50%;
    `
}

const theme = {
    colors,
    fontSize,
    common,
};

export default theme;