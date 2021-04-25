
const pixelToRem = size => `${size / 16}rem`;

const colors = {
    red: "#CC2C38",
    black: "#3E3E40",
    beige: "#EDEEE9",
};

const fontSize = {
    base: pixelToRem(18),
    subtitle: pixelToRem(24),
    halftitle: pixelToRem(40),
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
    `,

    pageWrap:`
        width: 100vw;
        height: 100vh;
        position: relative;
        transition-property: all;
        transition-duration: 1s;
        transition-timing-function: ease-out;
    `,

    block:`
        display: grid;
        grid-template-columns: 1fr 2fr 10rem;
        align-items: center;
    `
}

const theme = {
    colors,
    fontSize,
    common,
};

export default theme;