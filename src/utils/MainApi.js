import * as cs from './constants';

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

  reqDelMovie(movie) {
    return fetch(`${this._baseUrl}/movies/${movie}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }

  getSaveMovie() {
    return fetch(`${this._baseUrl}/movies`, {
        credentials: 'include'
      })
      .then(res => this._checkResponse(res))
  }

  handleLike(data) {
      return fetch(`${this._baseUrl}/movies`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': this._type
          },
          body: JSON.stringify({
            "country": data.country,
            "director": data.director,
            "duration": data.duration,
            "year": data.year,
            "description": data.description,
            "image": `${this._baseMovies}${data.image.url}`,
            "trailerLink": data.trailerLink,
            "nameRU": data.nameRU,
            "nameEN": data.nameEN,
            "thumbnail": `${this._baseMovies}${data.image.url}`,
            "id": data.id
          })
        })
        .then(res => this._checkResponse(res))
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

  signup(name, email, password) {
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
