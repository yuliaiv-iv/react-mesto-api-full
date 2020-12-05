import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const { card } = props;
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(like => like === currentUser._id);
    const cardDeleteButtonClassName = (
        `button__delete button opacity ${isOwn ? 'button_visible' : ''}`
    );
    const cardLikeButtonClassName = (
        `button__like button opacity ${isLiked ? 'button__like_active' : ''}`
    );

    function handleClick() {
        props.onCardClick(card);
    }
    function handleLikeClick() {
        props.onCardLike(card)
    }
    function handleDeleteClick() {
        props.onCardDelete(card)
    }

    return (
        <li className="card">
            <img
                className="card__image"
                src={card.link} alt={card.name}
                onClick={handleClick}
            />
            <button
                type="button"
                aria-label="удалить элемент"
                className={cardDeleteButtonClassName}
                onClick={handleDeleteClick}>
            </button>
            <div className="card__info">
                <h3 className="card__title" >{card.name}</h3>
                <div className="card__like">
                    <button
                        type="button"
                        aria-label="выразить положительную реакцию"
                        className={cardLikeButtonClassName}
                        onClick={handleLikeClick}>
                    </button>
                    <div className="card__like-counter">{card.likes.length}</div>
                </div>
            </div>
        </li>
    )
}

export default Card;