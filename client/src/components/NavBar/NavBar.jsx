import React, {useState} from "react";
import style from './NavBar.module.css';
import {Link, animateScroll as scroll} from "react-scroll";

const NavBar = () => {

    const [state, setState] = useState(true);

    return (
        <nav className={style.topMenu}>
            {/*<div className="myContainer">*/}

            <div onClick={() => setState(!state)}
                 className={state ? style.menuIcon : (style.menuIcon + ' ' + style.menuIconOpen)}
            />


            <ul id="menu" className={state ? style.slideClosed : style.slideOpened}>
                <li>
                    <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-30}
                        duration={500}>
                        Наши услуги
                    </Link>
                </li>
                <li>
                    <Link
                        to="priceForm"
                        spy={true}
                        smooth={true}
                        offset={20}
                        duration={500}>
                        Узнать стoимoсть
                    </Link>
                </li>
                <li>
                    <Link
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        Написать директору<
                    /Link><
                    /li>
                <li>
                    <Link
                        to="warranty"
                        spy={true}
                        smooth={true}
                        offset={(window.innerWidth > 600) ? 70 : -100}
                        duration={600}>
                        Гаpантия
                    </Link>

                </li>
                <li>
                    <Link
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={(window.innerWidth > 600) ? -40 : 650}
                        duration={500}>
                        Кoнтакты
                    </Link>
                </li>

            </ul>



        </nav>
    );

};

export default NavBar;