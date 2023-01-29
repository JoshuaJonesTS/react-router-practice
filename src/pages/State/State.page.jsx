import React, { useState } from 'react';
import Button from '../../blocks/Button.block';
import { americanStates } from './State.utils';

const State = () => {
    const [state, setState] = useState('');
    const [buttonColor, setButtonColor] = useState('rgb(34, 139, 34)');

    const handleChange = (pickedState) => {
        setState(pickedState)
        setButtonColor('rgb(32, 178, 170)')
    }

    return (
        <div>
            <h1>This code is being typed on a laptop located in {state}</h1>
            <Button buttonColor={buttonColor} event={() => handleChange(americanStates[0])} text={americanStates[0]}></Button>
        </div>
    );
}

export default State;