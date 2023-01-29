import React, { useState } from 'react';

const State = () => {
    const [state, setState] = useState('California');

    return (
        <div>
            <h1>This code is being typed on a laptop located in {state}</h1>
            <button
            type="button"
            onClick={() => setState('Nevada')}>Nevada</button>
        </div>
    );
}

export default State;