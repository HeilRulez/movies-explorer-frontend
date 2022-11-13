import * as cs from './constants.js';

class Api {
  constructor({baseUrl, type}) {
    this._baseUrl = baseUrl;
    this._type = type;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return new Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  renderAllCards() {
    return fetch(`${this._baseUrl}/cards`, {
        credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }

  reqDelCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }

  handleLike(id, isLiked) {
    if (!isLiked) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => this._checkResponse(res))
    } else {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
          method: 'PUT',
          credentials: 'include'
        })
        .then(res => this._checkResponse(res))
    }
  }

  sendData(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          'Content-Type': this._type
        },
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(res => this._checkResponse(res))
  }

  signin(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
        method: 'POST',
        headers: {
          "Content-Type": this._type,
        },
        credentials: 'include',
        body: JSON.stringify({
          "password": password,
          "email": email
        })
      })
      .then(res => this._checkResponse(res))
    }

  signup(email, password, name) {
  return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": this._type,
      },
      credentials: 'include',
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password
      })
    })
    .then(res => this._checkResponse(res))
  }

  logOut() {
    return fetch(`${this._baseUrl}/users/signout`, {
      credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }
}

export default new Api(cs.configApi);
