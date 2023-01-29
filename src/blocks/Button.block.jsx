import React from 'react'

const Button = ({ buttonColor, event, text }) => {
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
            event
        }>{text}
    </button>
}

export default Button;