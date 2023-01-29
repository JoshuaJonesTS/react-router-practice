import React from 'react';
import Square from '../../blocks/Square.block';
import ArraySquares from './Squares.util';

const Squares = () => {
    let arraySquares = ArraySquares(20, 'purple');
    
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly'
        }}>
            <Square color={'red'} label={['red 1', 'white']}/>
            <Square color={'blue'} label={['blue 1', 'white']}/>
            <Square color={'green'} label={['green 1', 'black']}/>
            <Square color={'yellow'} label={['yellow 1', 'black']}/>
            {arraySquares}
        </div>
    );
}

export default Squares;