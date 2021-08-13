import React from "react";
import style from './SalesForm.module.css'


const SalesForm = ({title, text, formTextPlaceholderOne, formTextPlaceholderTwo}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправлена форма.');
    }

    return (
        <div className={style.form}>
            <div className={style.formTitle}>{title}</div>
            <div className={style.formText}>
                {text}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={formTextPlaceholderOne}/>
                <input type="tel" name="phone" placeholder={formTextPlaceholderTwo} required=""/>
                <input type="hidden" name="discount" value="Скидка 15%"/>
                <button type="submit"
                        className={style.sendButton}>Пoлучить скидку
                </button>

            </form>
        </div>
    );
}


export default SalesForm;