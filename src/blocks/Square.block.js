import React from 'react';

const Square = ({ color }) => {
    return (
        <div style={{
            backgroundColor: color,
            border: '5px solid black',
            height: '100px',
            width: '100px',
        }}>
            Square
        </div>
    );
}

export default Square;