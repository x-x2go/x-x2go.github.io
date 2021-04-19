import React from 'react';

const BubbleFilter = () => {
 return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
        <filter id="liquid">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
        </filter>
        </defs>
    </svg>
 )
}

export default BubbleFilter;