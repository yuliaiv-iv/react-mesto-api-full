import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards } = props;
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img
                        className="profile__image"
                        src={currentUser.avatar}
                        alt="Фотография профиля"
                    />
                    <div className="profile__cover">
                        <button
                            onClick={onEditAvatar}
                            type="button"
                            className="button profile__button-avatar"
                            aria-label="обновить фотографию пользователя">
                        </button>
                    </div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button
                        onClick={onEditProfile}
                        type="button"
                        aria-label="обновить информацию пользователя"
                        className="button profile__button-edit opacity">
                    </button>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button
                    onClick={onAddPlace}
                    type="button"
                    aria-label="добавить новую карточку"
                    className="button profile__button-add opacity">
                </button>
            </section>
            <section className="card-container">
                <ul className="card-container__list">
                {/* { console.log('List inside ul', cards) } */}
                    {cards.map(card => <Card {...cards}
                        onCardClick={onCardClick}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                        key={card._id}
                        card={card} />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;