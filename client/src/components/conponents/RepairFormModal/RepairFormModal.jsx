import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import SubmitFormSuccess from "../SubmitFormSuccess/SubmitFormSuccess";
import style from './RepairFormModal.module.css';


const RepairFormModal = ({modalIsOpen, closeModal, formSubmit, children }) => {


    return (

        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}>

            {formSubmit ?
                <SubmitFormSuccess/> :
                <div className={style.form__container}>
                    {children}
                </div>
            }
        </ReactModal>
    );
};


export default RepairFormModal;