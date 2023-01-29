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
            <Square color={'green'}/>
            <Square color={'yellow'}/>
        </div>
    );
}

export default Squares;