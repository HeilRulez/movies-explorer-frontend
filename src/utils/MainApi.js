import * as cs from './constants.js';

class MainApi {
  constructor({baseUrl, baseMovies, type}) {
    this._baseUrl = baseUrl;
    this._baseMovies = baseMovies;
    this._type = type;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return new Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }

  reqDelMovie(idMovie) {
    return fetch(`${this._baseUrl}/movies/${idMovie}`, {
        method: 'DELETE',
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

  sendData(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          'Content-Type': this._type
        },
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          email: email
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
      method: 'POST',
      credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }
}

export default new MainApi(cs.configApi);
