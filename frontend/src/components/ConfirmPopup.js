import React from 'react';
import Popup from './Popup';
import SubmitButton from './SubmitButton.js';


function ConfirmPopup({ card, onDelete, isOpen, onClose }) {

    function handleSubmit(event) {
        event.preventDefault();
        onDelete(card)
    }

    return (
        <Popup
            name="delete"
            classname="popup__container"
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="popup__title">Вы уверены?</h3>
            <form
                onSubmit={handleSubmit}
                className="popup__form"
                action="#"
                method="POST"
                noValidate>
                <SubmitButton
                    classname="popup"
                    button="Да"
                >
                </SubmitButton>
            </form>
        </Popup>
    )
}

export default ConfirmPopup;