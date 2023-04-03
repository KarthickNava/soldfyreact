import React from 'react';
import style from './Input.module.css'
const Input = (props) => {
    const { name, type, placeholder, onchange, value, className } = props;
    return ( 
        <input className={`${style.input} ${className}`} name={name} placeholder={placeholder} onchange={onchange} value={value} type={ type} />
     );
}

export default Input;