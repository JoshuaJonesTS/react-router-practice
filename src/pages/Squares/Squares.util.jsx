import React from 'react';
import Square from '../../blocks/Square.block';

const ArraySquares = (number, color) => {
    let squares = []; // hold square componets

    for(let i = 1; i <= number; i++) {
        squares.push(<Square color={color} label={[color + ' ' + number, 'white']}/>);
    }

    return squares;
}

export default ArraySquares;