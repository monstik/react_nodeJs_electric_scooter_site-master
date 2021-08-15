import React, {useState} from "react";
import style from './PriceFormBlock.module.css';
import PriceForm from "../Forms/PriceForm/PriceForm";
import RepairFormModal from "../conponents/RepairFormModal/RepairFormModal";

const PriceFormBlock = () => {


    const [formSubmit, setFormSubmit] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);


    const submitForm = (isSubmit) => {
        setFormSubmit(isSubmit);
        setModalOpen(isSubmit);
    }

    const closeModal = () => {

        setModalOpen(false);

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
                   <PriceForm
                   isSubmit={submitForm}
                   />
                    <RepairFormModal
                        formSubmit={formSubmit}
                        modalIsOpen={modalOpen}
                        closeModal={closeModal}


                    />
                </div>
            </div>
        </div>

    );

};


export default PriceFormBlock;