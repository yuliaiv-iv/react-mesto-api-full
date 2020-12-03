import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import Popup from './Popup';
import SubmitButton from './SubmitButton.js';

function EditProfilePopup({ onUpdateUser, isOpen, onClose, onClick }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [isValid, setIsValid] = React.useState({ name: true, about: true });
    const [validationMessage, setValidationMessage] = React.useState({ name: '', about: '', });
    const [inputValue, setInputValue] = React.useState({ name: '', about: '' });
    const isFormValid = Object.values(isValid).every(Boolean);

    React.useEffect(() => {
        setInputValue({
            name: currentUser.name || '',
            about: currentUser.about || ''
        });
    }, [currentUser]);

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
        onUpdateUser({
            name: inputValue.name,
            about: inputValue.about
        });
    }

    React.useEffect(() => {
        setInputValue({
            name: currentUser.name || '',
            about: currentUser.about || ''
        });
        setValidationMessage({ name: '', about: '', });
    }, [currentUser.about, currentUser.name, isOpen])

    return (
        <Popup
            name="edit"
            classname="popup__container"
            isOpen={isOpen}
            onClose={onClose}
        >
            <h3 className="popup__title">Редактировать профиль</h3>
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
                        onChange={handleInputChange}
                        id="name-input"
                        className="popup__item"
                        name="name"
                        placeholder="Имя"
                        required
                        minLength="2" maxLength="40"
                    />
                    <span
                        id="name-input-error"
                        className={!isValid.name ? 'popup__item-error' : ""}
                    >
                        {validationMessage.name}
                    </span>
                </label>
                <label className="popup__field">
                    <input
                        type="text"
                        value={inputValue.about}
                        onChange={handleInputChange}
                        id="about-input"
                        className="popup__item"
                        name="about"
                        placeholder="О себе"
                        required
                        minLength="2" maxLength="200"
                    />
                    <span
                        id="name-input-error"
                        className={!isValid.about ? 'popup__item-error' : ""}
                    >
                        {validationMessage.about}
                    </span>
                </label>
                <SubmitButton
                    classname="popup"
                    isDisabled={!isFormValid}
                    button="Сохранить"
                    onClick={onClick}
                >
                </SubmitButton>
            </form>
        </Popup>
    )
}

export default EditProfilePopup;

