import React from 'react';
import Square from '../../blocks/Square.block';

const Squares = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <Square color={'red'} label={'red 1'}/>
            <Square color={'blue'} label={'blue 1'}/>
            <Square color={'green'} label={'green 1'}/>
            <Square color={'yellow'} label={'yellow 1'}/>
        </div>
    );
}

export default Squares;