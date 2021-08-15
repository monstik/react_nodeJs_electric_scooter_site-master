import React, {useEffect, useState} from "react";
import style from "./PriceForm.module.css";
import ContactTypeSelect from "../../conponents/ContactTypeSelect/ContactTypeSelect";


const PriceForm = ({isSubmit}) => {
        const [text, setText] = useState('');
        const [phone, setPhone] = useState('');
        const [contactType, setContactType] = useState(0);

        const [formValid, setFormValid] = useState(false);

        const [textDirty, setTextDirty] = useState(false);
        const [phoneDirty, setPhoneDirty] = useState(false);

        const [textError, setTextError] = useState('Это поле не может быть пустым');
        const [phoneError, setPhoneError] = useState('Это поле не может быть пустым');

        const blurHandler = (e) => {
            switch (e.target.name) {
                case 'text':
                    setTextDirty(true);
                    break;
                case 'phone':
                    setPhoneDirty(true);
                    break;
                default:
                    break;

            }
        };

        const textHandler = (e) => {
            const regV2 = /^[ \s]+|[ \s]+$/g;
            setText(e.target.value);
            if (e.target.value.length > 0) {
                if (regV2.test(String(e.target.value))) {
                    setTextError('Уберите пробелы в начале или конце строки')
                } else {
                    if (e.target.value.length > 500) {
                        setTextError('Максимальная длинна текста - 500символов')
                    } else {

                        setTextError('');
                    }
                }
            } else {
                setTextError('Это поле не может быть пустым')
            }
        };
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

        };
        const contactTypeHandler = (state) => {
            console.log(state);
            setContactType(state);
        }
        const onPhoneClick = () => {
            if (!phone) {
                setPhone('+380');
            }
        };

        useEffect(() => {
            if (phoneError || textError) {
                setFormValid(false);
            } else {
                setFormValid(true);
            }
        }, [textError, phoneError]);

        const submitForm = (e) => {
            e.preventDefault();
            if (!formValid) {
                setTextDirty(true);
                setPhoneDirty(true);
                isSubmit(false);
            } else {

                setFormValid(false);
                setText('');
                setPhone('');
                setTextDirty(false);
                setPhoneDirty(false);
                setTextError('Это поле не может быть пустым')
                setPhoneError('Это поле не может быть пустым')
                isSubmit(true);
            }
        };


        return (
            <div className={style.form__block}>
                <form onSubmit={submitForm}>
                <textarea
                    value={text}
                    onChange={textHandler}
                    onBlur={blurHandler}
                    placeholder=" Вкpатцe oпишитe пpoблeму"
                    name="text"
                />


                    <div className={style.validation__field}>
                        {(textDirty && textError) && <label>
                            {textError}
                        </label>}
                    </div>
                    <input
                        onClick={onPhoneClick}
                        value={phone}
                        onChange={phoneHandler}
                        onBlur={blurHandler}
                        type="tel"
                        name="phone"
                        placeholder="Номер телефона для связи"
                    />
                    <div className={style.validation__field}>
                        {(phoneDirty && phoneError) && <label>
                            {phoneError}
                        </label>}
                    </div>
                    <ContactTypeSelect
                        onChange={contactTypeHandler}
                    />
                    <button

                        type="submit"
                        className={style.send__button}>Узнать
                        стоимость
                    </button>
                </form>
            </div>
        );
    }
;


export default PriceForm;