import React from 'react';
import Popup from './Popup';

function ImagePopup({ onClose, isOpen, card }) {
    return (
        <Popup
            name="image"
            classname="popup__container_image"
            onClose={onClose}
            isOpen={isOpen}
        >
            <img
                className="popup__view"
                src={card ? card.link : ""}
                alt={card ? card.name : ""}
            />
            <figcaption
                className="popup__title popup__title_image">
                {card ? card.name : ''}
            </figcaption>
        </Popup>
    )
}

export default ImagePopup;
