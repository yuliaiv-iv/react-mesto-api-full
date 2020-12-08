export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    getHeader() {
        const token = localStorage.getItem('token');
        return {
            ...this._headers,
            Authorization: `Bearer ${token}`,
        }
    }

    _checkStatus(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this.getHeader(),
        })
            .then(this._checkStatus);
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this.getHeader(),

        })
            .then(this._checkStatus);
    }

    postNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this.getHeader(),
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkStatus);
    }

    setUserData(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this.getHeader(),
            method: 'PATCH',
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })
            .then(this._checkStatus);
    }

    setUserAvatarData(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this.getHeader(),
            method: 'PATCH',
            body: JSON.stringify({
                avatar: data.link
            })
        })
            .then(this._checkStatus);
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            headers: this.getHeader(),
            method: 'DELETE'
        })
            .then(this._checkStatus);
    }

    changeLikeStatus(cardId, like) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: like ? 'PUT' : 'DELETE',
            headers: this.getHeader(),
        })
            .then(this._checkStatus);
    }
}

export const api = new Api({
    baseUrl: 'https://api.yuliainthecloud.students.nomoredomains.monster',
    headers: {
        'Content-Type': 'application/json'
    }
}); 


