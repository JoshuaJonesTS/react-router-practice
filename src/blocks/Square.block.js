import React from 'react';

const Square = ({ color, label = []}) => {
    return (
        <div style={{
            backgroundColor: color,
            border: '5px solid black',
            color: label[1],
            height: '100px',
            width: '100px',
            textAlign: 'center'
        }}>
            {label[0]}
        </div>
    );
}

export default Square;