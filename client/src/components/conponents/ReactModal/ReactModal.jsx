import React from 'react';
import Modal, {setAppElement} from 'react-modal';
// import {setAppElement} from 'react-modal';
import style from './ReactModal.module.css';
import './ReactModal.css';


setAppElement('#root');


const ReactModal = ({isOpen, onAfterOpen, onRequestClose, children}) => {
    return (
        <Modal
                className={style.Modal}
                overlayClassName={style.Overlay}
               isOpen={isOpen}
                closeTimeoutMS={600}
               onRequestClose={onRequestClose}

        >

            {children}

        </Modal>
    );
};


export default ReactModal;