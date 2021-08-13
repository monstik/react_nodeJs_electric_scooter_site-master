import React from 'react';
import style from './Button.module.css';


const Button = ({setActive, children}) => {
    return (
        <button onClick={() => setActive(true)} className={style.custom__button}>
            {children}
        </button>
    );
};

export default Button;