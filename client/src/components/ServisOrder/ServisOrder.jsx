import React from 'react';
import style from './ServisOrder.module.css';

const ServisOrder = () => {
    return(
    <div className={style.servisOrder} id={'section2'}>
        <div className="myContainer">
            <div className={style.sectionTitle}>Как получить быстрый ремонт электротранспорта</div>
            <div className={style.soList}>
                <div className={style.soItem}>
                    <div className={style.soItemNum}>01</div>
                    <div className={style.soItemText}>Остасьте контакты для связи с Вами в форме выше или свяжитесь
                        с нами
                        удобным для Вас способом
                    </div>
                </div>
                <div className={style.soItem}>
                    <div className={style.soItemNum}>02</div>
                    <div className={style.soItemText}>Приносите или отправляете свой электротранспорт в наш сервис
                        удобным
                        для Вас перевозчиком
                    </div>
                </div>
                <div className={style.soItem}>
                    <div className={style.soItemNum}>03</div>
                    <div className={style.soItemText}>Получите результат диагностики в тот же день, а
                        отремонтированный
                        электротранспорт уже начиная со следующего дня
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};


export default ServisOrder;