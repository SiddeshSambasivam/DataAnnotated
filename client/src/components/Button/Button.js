import React from 'react';
import './style.css';

const Button = ({props}) => {
    return(
        <button className="big-button">{props}</button>
    )
}

export default Button;