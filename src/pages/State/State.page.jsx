import React, { useState } from 'react';

const State = () => {
    const [state, setState] = useState('California');
    const [buttonColor, setButtonColor] = useState('rgb(34, 139, 34)');

    const handleChange = () => {
        setState('Nevada')
    }

    return (
        <div>
            <h1>This code is being typed on a laptop located in {state}</h1>
            <button
            style={{
                backgroundColor: buttonColor,
                borderRadius: '10px',
                color: 'white',
                fontWeight: '700',
                padding: '10px'
            }}
            type="button"
            onClick={
              handleChange
            }>Nevada</button>
        </div>
    );
}

export default State;