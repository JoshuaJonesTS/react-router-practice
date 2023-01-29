import React from 'react';
import Square from '../../blocks/Square.block';

const Squares = () => {
    let purpleSquares = [];
    for(let i = 1; i <= 10; i++) {
        purpleSquares.push(<Square color={'purple'} label={'purple ' + i}/>);
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <Square color={'red'} label={'red 1'}/>
            <Square color={'blue'} label={'blue 1'}/>
            <Square color={'green'} label={'green 1'}/>
            <Square color={'yellow'} label={'yellow 1'}/>
            {purpleSquares}
        </div>
    );
}

export default Squares;