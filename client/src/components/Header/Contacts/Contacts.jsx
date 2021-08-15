import React, {useState} from "react";
import style from './Contact.module.css';
import ReactModal from "../../conponents/ReactModal/ReactModal";
import SalesForm from "../../Forms/SalesForm/SalesForm";
import Button from "../../conponents/Button/Button";
import RepairForm from "../../Forms/RepairForm/RepairForm";
import SubmitFormSuccess from "../../conponents/SubmitFormSuccess/SubmitFormSuccess";
import UniversalForm from "../../Forms/UniмersalForm/UniversalForm";


const Contacts = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);

    console.log(formSubmit);


    const openModal = () => {
        setIsOpen(true);
        setFormSubmit(false);
    };

    const closeModal = () => {
        setIsOpen(false);

    };

    const submitForm = (isSubmit) => {
        setFormSubmit(isSubmit);
    }

    return (
        <div className={style.contactLine}>
            <div className="myContainer">
                <div className={style.gridContainer}>
                    <div className={style.logo}>
                        <div className={style.siteLogo}><img src={props.logoImg} alt="logo"/></div>
                        <div className={style.topSlogan}>Сервис по ремонту электротранспорта</div>
                    </div>
                    <div className={style.phone}>
                        <div className={style.phoneNumber}>
                            <div className={style.phone__number__link}>
                                <a
                                    href={"tel:" + props.phoneNumber}
                                >{props.phoneNumber}</a>
                            </div>
                            <div className={style.description}>
                                <div className={style.description}><strong>График pабoты: Пн-Пт: 09:00-18:00</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.formButton}>
                        <Button setActive={openModal}>
                            Заказать ремонт
                        </Button>

                    </div>
                </div>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>

                {formSubmit ?
                    <SubmitFormSuccess/> :
                    <div className={style.form__container}>


                        <UniversalForm
                            isSubmit={submitForm}
                            title={'Заказать peмoнт'}
                            description={'С Гаpантией дo 3 месяцев!'}
                            buttonText={'Заказать ремонт'}
                        />
                   </div>
            }
            </ReactModal>
        </div>
    );

};

export default Contacts;