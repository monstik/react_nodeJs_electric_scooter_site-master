import React, {useState} from "react";
import ReactModal from "../ReactModal/ReactModal";
import SubmitFormSuccess from "../SubmitFormSuccess/SubmitFormSuccess";
import style from './RepairFormModal.module.css';


const RepairFormModal = ({modalIsOpen, closeModal, formSubmit, children }) => {

   // const [closeModal, setCloseModal] = useState(modalIsOpen);



    return (

        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}>

            {formSubmit ?
                <SubmitFormSuccess close={closeModal}/> :
                <div className={style.form__container}>
                    {children}
                </div>
            }
        </ReactModal>
    );
};


export default RepairFormModal;