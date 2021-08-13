import React from 'react';
import style from './Services.module.css';


const Services = (props) => {
    return (
        <div className={style.servis}>

            <div className="myContainer" id={'services'}>
                <div className={style.sectionTitle}>Наши услуги</div>
                <div className={style.servisTab}>
                    <ul className={style.tabs}>
                        <li className={style.current}><span>Ремонт электросамокатов</span>
                            <i style={{width: 20, height: 20}} className="bi bi-arrow-right"></i>
                            </li>
                        <li><span>Ремонт гиробордов</span><i className="bi bi-arrow-right"></i></li>
                        <li><span>Ремонт моноколес</span><i className="fa fa-arrow-right"></i></li>
                        <li><span>Ремонт моноколес</span><i className="fa fa-arrow-right"></i></li>
                    </ul>
                    <div className="box visible">
                        <p>Популярные услуги по ремонту электросамокатов</p>
                        <div className="box-table">
                            <table>
                                <tr>
                                    <td>Бесплатная диагностика электросамоката. Стоимость диагностики составляет 0
                                        грн, при
                                        условии согласия клиента на оплату минимальной стоимости ремонта, которая
                                        определяется при приеме оборудования
                                    </td>
                                    <td>0 грн</td>
                                </tr>
                                <tr>
                                    <td>Ремонт электросамоката 1</td>
                                    <td> 100 грн</td>
                                </tr>
                                <tr>
                                    <td>Ремонт электросамоката 2</td>
                                    <td> 200 грн</td>
                                </tr>
                                <tr>
                                    <td>Ремонт электросамоката 3</td>
                                    <td> 300 грн</td>
                                </tr>
                            </table>
                        </div>
                        <a href="javascript://" data-fancybox="" data-src="#lb-master" className="blue-botton">Моей
                            поломки
                            нет в списке</a>
                    </div>
                </div>
            </div>
            <div className="servis-list">


            </div>
        </div>
    );
};


export default Services;