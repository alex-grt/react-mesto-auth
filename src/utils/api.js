/* класс выполнения запросов */
class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  /* обработка запроса */
  _handleRequest(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res.status);
  }

  /* консолидация запросов на получение информации */
  getPageInfo() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  }

  /* запрос на получение информации о пользователе */
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._handleRequest);
  }

  /* запрос на изменение информации о пользователе */
  setUserInfo(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._handleRequest);
  }

  /* запрос на изменение аватара пользователя */
  setUserAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._handleRequest);
  }

  /* запрос на получение массива карточек */
  getCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._handleRequest);
  }

  /* запрос на добавление карточки */
  addCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
    .then(this._handleRequest);
  }

  /* запрос на удаление карточки */
  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._handleRequest);
  }

  /* запросы переключения лайка карточки */
  toggleLike(id, isLiked) {
    if (isLiked) {
      return fetch(`${this._baseUrl}cards/likes/${id}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(this._handleRequest);
    } else {
      return fetch(`${this._baseUrl}cards/likes/${id}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(this._handleRequest);
    }
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29/',
  headers: {
    "authorization": "b02f2cf1-1397-498b-b986-5d871e627d26",
    "content-type": "application/json"
  }
});

export default api;
