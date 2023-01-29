import React from 'react';
import Square from '../../blocks/Square.block';

const Squares = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <Square color={'red'}/>
            <Square color={'blue'}/>
        </div>
    );
}

export default Squares;