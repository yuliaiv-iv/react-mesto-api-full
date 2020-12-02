import React from 'react';
import Popup from './Popup';
import SubmitButton from './SubmitButton.js';

function AddPlacePopup({ onClick, onAddPlace, isOpen, onClose}) {

    const [inputValue, setInputValue] = React.useState({ name: '', link: '', });
    const [isValid, setIsValid] = React.useState({ name: false, link: false });
    const [validationMessage, setValidationMessage] = React.useState({ name: '', link: '' });
    const isFormValid = Object.values(isValid).every(Boolean);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
        setIsValid({
            ...isValid,
            [name]: event.target.validity.valid,
        })
        setValidationMessage({
            ...validationMessage,
            [name]: event.target.validationMessage,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        onAddPlace({
            name: inputValue.name,
            link: inputValue.link,
        });
    }

    React.useEffect(() => {
        setInputValue({ name: '', link: '' });
        setValidationMessage({ name: '', link: '' });
        setIsValid({ name: false, link: false });
    }, [isOpen])

    return (
        <Popup
            name="add"
            classname="popup__container"
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="popup__title">Новое место</h3>
            <form
                onSubmit={handleSubmit}
                className="popup__form"
                action="#"
                method="POST"
                noValidate
            >
                <label className="popup__field">
                    <input
                        type="text"
                        value={inputValue.name}
                        className="popup__item"
                        name="name"
                        placeholder="Название"
                        required
                        minLength="1" maxLength="30"
                        onChange={handleInputChange}
                    />
                    <span
                        id="title-input-error"
                        className={!isValid.name ? 'popup__item-error' : ""}
                    >
                        {validationMessage.name}
                    </span>
                </label>
                <label className="popup__field">
                    <input
                        type="url"
                        value={inputValue.link}
                        className="popup__item"
                        name="link"
                        placeholder="Ссылка на картинку"
                        required
                        onChange={handleInputChange}
                    />
                    <span
                        id="title-input-error"
                        className={!isValid.link ? 'popup__item-error' : ""}
                    >
                        {validationMessage.link}
                    </span>
                </label>
                <SubmitButton
                    classname="popup"
                    isDisabled={!isFormValid}
                    button="Создать"
                    onClick={onClick}
                >
                </SubmitButton>
            </form>
        </Popup>
    )
}

export default AddPlacePopup;
