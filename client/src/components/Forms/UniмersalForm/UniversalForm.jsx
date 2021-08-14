import React, {useEffect, useState} from 'react';
import style from './RepairForm.module.css';
import ContactTypeSelect from "../../conponents/ContactTypeSelect/ContactTypeSelect";


const UniversalForm = ({isSubmit}) => {

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
        const regV = /^[a-z A-Z а-я А-Я]{1,}$/;
        const regV2 = /^[ \s]+|[ \s]+$/g;
        setName(e.target.value);
        if (e.target.value.length > 0) {
            if(regV2.test(String(e.target.value))){
                setNameError('Уберите пробелы в начале или конце строки')
            } else {
                if (!regV.test(String(e.target.value))) {
                    setNameError('Поле должно содержать только быквы')
                } else {
                    if (e.target.value.length > 40) {
                        setNameError('Максимальная длинна текста - 30символов')
                    } else {

                        setNameError('');
                    }
                }
            }
        } else {
            setNameError('Это поле не может быть пустым')
        }

    }

    const phoneHandler = (e) => {
        const regV = /^([+]?[0-9\s-\(\)]{7,14})*$/i;
        setPhone(e.target.value);
        if (e.target.value.length > 0) {
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


    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!formValid) {
            setNameDirty(true);
            setPhoneDirty(true);

            isSubmit(false);
        } else {

            isSubmit(true);
        }

    }


    return (


        <div className={style.form__block}>
            <div className={style.form__title}>Заказать peмoнт</div>
            <div className={style.form__text}>С Гаpантией дo 3 месяцев!</div>
            <form onSubmit={onSubmitForm}>

                <input
                    value={name}
                    onBlur={e => blurHandler(e)}
                    onChange={e => nameHandler(e)}
                    type="text"
                    placeholder="Как вас зoвут?"
                    name="name"/>
                <div className={style.validation__field}>
                    {(nameDirty && nameError) && <label>
                        {nameError}
                    </label>}
                </div>


                <input
                    value={phone}
                    onBlur={e => blurHandler(e)}
                    onChange={e => phoneHandler(e)}
                    onClick={onPhoneClick}
                    type="tel"
                    placeholder="Номер телефона для связи"
                    name="phone"/>
                <div className={style.validation__field}>
                    {(phoneDirty && phoneError) && <label>
                        {phoneError}
                    </label>}
                </div>
                <ContactTypeSelect/>
                <button

                    // disabled={!formValid}
                    type="submit"

                    className={style.send__button}>Заказать ремонт
                </button>

            </form>
        </div>

    );
};


export default UniversalForm;