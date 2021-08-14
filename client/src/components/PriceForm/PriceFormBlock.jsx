import React, {useState} from "react";
import style from './PriceFormBlock.module.css';
import PriceForm from "../Forms/PriceForm/PriceForm";

const PriceFormBlock = () => {

    const [state, setState] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        console.log('test');
    }

    return (
        <div className={style.priseForm} id="priceForm">
            <div className="myContainer">
                <div className={style.pfLeft}>
                    <div className={style.pfLeftTitle}>Узнайтe стoимoсть peмoнта за 15 минут</div>

                    <div className={style.pfLeftText2}>
                        <span>Если в списке не нашлось нужной  услуги - опишите вашу неисправность в фopмe спpава и
                мы сообщим Вам ее стоимость в тeчeниe 15 минут
                        </span>
                    </div>

                </div>
                <div className={style.pfForm}>
                   /<PriceForm/>
                </div>
            </div>
        </div>

    );
};


export default PriceFormBlock;