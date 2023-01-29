import React from 'react';
import Square from '../../blocks/Square.block';

const Squares = () => {
    let purpleSquares = [];
    for(let i = 1; i <= 20; i++) {
        purpleSquares.push(<Square color={'purple'} label={['purple ' + i, 'white']}/>);
    }
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
            {purpleSquares}
        </div>
    );
}

export default Squares;