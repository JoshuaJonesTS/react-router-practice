import React from 'react';

const Square = ({ color, label }) => {
    return (
        <div style={{
            backgroundColor: color,
            border: '5px solid black',
            height: '100px',
            width: '100px',
            textAlign: 'center'
        }}>
            {label}
        </div>
    );
}

export default Square;