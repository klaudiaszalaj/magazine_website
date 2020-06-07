import React from 'react';

const Modal = props => {

    let modalContainer = (
        <div id="modal-container">
            <h3>{props.modalText}</h3>
            <button onClick={props.onClose}>Close</button>
        </div>
    );

    if (!props.isOpen) {
        modalContainer = null;
    }

    return(
        <div id="modal">
            {modalContainer}
        </div>

    )
}

export default Modal