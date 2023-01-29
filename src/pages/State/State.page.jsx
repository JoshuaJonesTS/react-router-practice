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
            {
                americanStates.map(oneState => {
                    let display;
                    if(oneState === state) {
                        display = <Button buttonColor={'rgb(34, 139, 34)'} event={() => handleChange(oneState)} text={oneState}></Button>;
                    }
                    else {
                        display = <Button buttonColor={'rgb(32, 178, 170)'} event={() => handleChange(oneState)} text={oneState}></Button>;
                    }
                    return(
                        display
                    )
                })
            }
        </div>
    );
}

export default State;