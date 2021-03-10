## Mesto

Интерактивный сайт с элементами соц сети с возможностью опубликовывать и удалять созданные карточки. Реализация постановки и снятие лайка, просмотр фотографий в увеличенном формате. Возможность обновлять инфо и аватар юзера. Реализована регистрация и авторизации пользователя, переадресация, защита маршрутов

### Teхнологии

* React
* JS
* node.js
* Express
* Mongoose
* CSS Flexbox Grid Layout
* RestApi
* JWT

### Installation

# Frontend
требуется [Node.js](https://nodejs.org/) v12+ to run.

Запуск и сборка проекта

* npm install
* npm run start
* npm run build

# Backend
требуется [Node.js](https://nodejs.org/) v12+ to run.

Запуск проекта и запуск проекта с hot-reload

* npm install
* npm run start
* npm run dev

# Routes and methods:

* post: '/signup' - регистрация
* post: '/signin' - авторизация
* get: '/users' - получить всех пользователей
* get: '/users/me' - получить одного пользователя
* patch: '/users/me' - изменение информации о пользователе
* patch:'/users/me/avatar'
* get:'/cards' - получить все карточки
* get:'/cards/{:id}' - получить одну карточку
* delete:'/cards/{:id}' - удалить одну карточку
* put:'/cards/{:id}/likes' - поставить like карточке
* delete:'/cards/{:id}/likes' - удалить like карточке
