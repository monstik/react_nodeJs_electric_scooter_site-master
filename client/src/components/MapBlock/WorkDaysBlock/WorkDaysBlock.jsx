import React from 'react';
import style from './WorkDaysBlock.module.css';


const WorkDaysBlock = (props) => {
    return(
        <div className={style.workDaysBlock}>
            <h3 className={style.workDays}>График работы</h3>
            <ul className={style.workDaysList}>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Понедельник</span>
                        <span>10:00 - 18:00</span>
                    </div>
                </li>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Вторник</span>
                        <span>10:00 - 18:00</span>
                    </div>
                </li>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Среда</span>
                        <span>10:00 - 18:00</span>
                    </div>
                </li>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Четверг</span>
                        <span>10:00 - 18:00</span>
                    </div>
                </li>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Пятница</span>
                        <span>10:00 - 18:00</span>
                    </div>
                </li>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Суббота</span>
                        <span>Выходной</span>
                    </div>
                </li>
                <li>
                    <div className={style.workDaysListItem}>
                        <span>Воскресенье</span>
                        <span>Выходной</span>
                    </div>
                </li>
            </ul>
        </div>

    );
};

export default WorkDaysBlock;