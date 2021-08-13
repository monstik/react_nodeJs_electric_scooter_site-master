import React from 'react';
import style from './InformBlock.module.css';


const InformBlock = (props) => {
    return(

            <div className={style.contactInformationBlock}>
                <h3 className={style.contactInformation}>Контактная информация</h3>
                <ul className={style.contactInformationList}>
                    <li className={style.contactInformationItem}>
                        <img className={style.icon} src="./images/building.png" alt="built"/>
                        <div className={style.title}>Компания</div>
                        <div className={style.description}>Сервис по ремонту умного транспорта</div>
                    </li>
                    <li className={style.contactInformationItem}>
                        <img className={style.icon} src="./images/mapMarker.png" alt="marker"/>
                        <div className={style.title}>Адрес</div>
                        <div className={style.description}>Украина, Киев, ул. Кириловская, 160; корп Б, офис
                            307
                        </div>
                    </li>
                    <li className={style.contactInformationItem}>
                        <img className={style.icon} src="./images/manIco.png" alt="man"/>
                        <div className={style.title}>Контактное лицо</div>
                        <div className={style.description}>Богдан</div>
                    </li>
                    <li className={style.contactInformationItem}>
                        <img className={style.icon} src="./images/phoneIcon.png" alt="man"/>
                        <div className={style.title}>Телефон</div>
                        <div className={style.description}><a className={style.descriptionPhone}
                                                              href={'tel:+380995165196'}>+380995165196</a></div>
                    </li>т
                    <li className={style.contactInformationItem}>
                        <img className={style.icon} src="./images/emailIcon.png" alt="man"/>
                        <div className={style.title}>Email</div>
                        <div className={style.description}><a className={style.descriptionPhone}
                                                              href={'mailto:sales@itkiosk.com.ua'}>sales@itkiosk.com.ua</a>
                        </div>
                    </li>
                    <li className={style.contactInformationItem}>
                        <img className={style.icon} src="./images/emailIcon.png" alt="man"/>
                        <div className={style.title}>Viber</div>
                        <div className={style.description}><a className={style.viber}
                                                              href="viber://chat?number=380995165196">+380995165196</a>
                        </div>
                    </li>
                </ul>
            </div>
    );
};


export default InformBlock;