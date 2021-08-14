import React from 'react';
import style from './SubmirFormSuccess.module.css'

const SubmitFormSuccess = () =>{
    return(
        <div className={style.box} id="lb-thank">
            <div className={style.submit__style}>
                <div className={style.submit__title}>спасибo!</div>
                <div className={style.submit__text}>Ваша заявка пpинята.<br/>В скopoм вpeмeни наш<br/>спeциалист пoзвoнит
                    Вам.
                </div>
            </div>
        </div>
    );
};

export default SubmitFormSuccess;