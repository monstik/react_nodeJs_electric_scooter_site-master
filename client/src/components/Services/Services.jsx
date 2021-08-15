import React, {useState} from 'react';
import style from './Services.module.css';
import {tabs, servicesList} from "./data";
import {Link} from 'react-scroll'

const Services = (props) => {
    const [currentTab, setCurrentTab] = useState(0);

    const onTabClick = (e) => {
        setCurrentTab(e.target.id);

    }

    return (
        <div className={style.servis}>
            <div className="myContainer" id={'services'}>
                <div className={style.section__title}>Наши услуги</div>
                <div className={style.servisTab}>
                    <ul className={style.tabs}>
                        {tabs.map((value) => {
                            let current = '';
                            if (value.id == currentTab) {
                                current = style.current;
                            }
                            return (
                                <li
                                    id={value.id}
                                    onClick={onTabClick}
                                    className={current}
                                >
                                    {value.name}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={style.box}>
                        <p className={style.popular__services}>Популярные услуги по ремонту электросамокатов</p>
                        <div className={style.box__table}>
                            <table>
                                <tbody>
                                {servicesList[currentTab].map(value => {
                                    return (
                                        <tr className={style.row__style}>
                                            <td>
                                                {value.description}
                                            </td>
                                            <td>
                                                {value.prise}
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>


                        <Link
                            to='priceForm'
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={500}
                            className="blue-botton">Моей
                            поломки
                            нет в списке</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Services;