import React, {useCallback, useEffect} from 'react';
import style from './SubmirFormSuccess.module.css'

const SubmitFormSuccess = ({close}) =>{





    useEffect(() => {
        setTimeout(() => close(false), 1500);
        console.log('test', close);
    })

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