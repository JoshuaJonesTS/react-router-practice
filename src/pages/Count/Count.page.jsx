import React from 'react';
import { useState, useEffect } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 1000)
    })
    return (
        <div>
            <p>I've rendered {count} times!</p>
        </div>
    );
}

export default Count;