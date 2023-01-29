import React, { useState } from 'react';
import Button from '../../blocks/Button.block';

const State = () => {
    const [state, setState] = useState('California');
    const [buttonColor, setButtonColor] = useState('rgb(34, 139, 34)');

    const handleChange = () => {
        setState('Nevada')
        setButtonColor('rgb(32, 178, 170)')
    }

    return (
        <div>
            <h1>This code is being typed on a laptop located in {state}</h1>
            <Button buttonColor={buttonColor} event={handleChange} text={'Nevada'}></Button>
        </div>
    );
}

export default State;