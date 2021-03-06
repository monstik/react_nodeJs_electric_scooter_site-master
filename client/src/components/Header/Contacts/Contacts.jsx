import React, {useState} from "react";
import style from './Contact.module.css';
import Button from "../../conponents/Button/Button";
import UniversalForm from "../../Forms/UniмersalForm/UniversalForm";
import RepairFormModal from "../../conponents/RepairFormModal/RepairFormModal";


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

                <RepairFormModal
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                    formSubmit={formSubmit}
                    >
                    <UniversalForm
                        isSubmit={submitForm}
                        title={'Заказать peмoнт'}
                        description={'С Гаpантией дo 3 месяцев!'}
                        buttonText={'Заказать ремонт'}
                    />
                </RepairFormModal>




        </div>
    );

};

export default Contacts;