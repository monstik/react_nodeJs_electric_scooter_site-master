import React, {useEffect, useState} from 'react';
import style from './RepairForm.module.css';


const RepairForm = () => {

    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [formValid, setFormValid] = useState(false);

    const [phoneDirty, setPhoneDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);

    const [phoneError, setPhoneError] = useState('Это поле не может быть пустым');
    const [nameError, setNameError] = useState('Это поле не может быть пустым');

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
        }

    };

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length > 0) {
            setNameError('');
        } else {
            setNameError('Это поле не может быть пустым')
        }

    }

    const phoneHandler = (e) => {
        const regV = /^([+]?[0-9\s-\(\)]{7,14})*$/i;
        setPhone(e.target.value);
        if (e.target.value.length > 0 ) {
            if (!regV.test(String(e.target.value))) {
                setPhoneError('Некорректный номер телефона');
            } else {
                setPhoneError('');
            }
        } else {
            setPhoneError('Это поле не может быть пустым');
        }


    }

    const onPhoneClick = () => {
        if (!phone) {
            setPhone('+380');
        }
    }

    useEffect(() => {
        if (phoneError || nameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, phoneError]);

    const test = () =>{
        setNameDirty(true);
        setPhoneDirty(true);
    }

    return (


        <div className={style.form__block}>
            <div className={style.form__title}>Заказать peмoнт</div>
            <div className={style.form__text}>С Гаpантией дo 3 месяцев!</div>
            <form>
                {(nameDirty && nameError) && <label style={{color: 'red'}}>
                    {nameError}
                </label>}
                <input
                    value={name}
                    onBlur={e => blurHandler(e)}
                    onChange={e => nameHandler(e)}
                    type="text"
                    placeholder="Как вас зoвут?"
                    name="name"/>
                {(phoneDirty && phoneError) && <label style={{color: 'red'}}>
                    {phoneError}
                </label>}
                <input
                    value={phone}
                    onBlur={e => blurHandler(e)}
                    onChange={e => phoneHandler(e)}
                    onClick={onPhoneClick}
                    type="tel"
                    placeholder="Номер телефона для связи"
                    name="phone"/>
                <button
                    disabled={!formValid}
                    type="submit"

                    className={style.send__button}>Заказать ремонт
                </button>
                <div className="form-chek">
                    <input type="checkbox" id="c1" checked=""/>
                    <label htmlFor="c1"><span></span></label>
                    Сoгласиe на oбpабoтку пepсoнальных данных
                </div>
            </form>
        </div>

    );
};


export default RepairForm;