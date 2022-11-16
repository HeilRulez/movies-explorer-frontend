import * as cs from './constants.js';

class MoviesApi {
  constructor({baseMovies}) {
    this._baseMovies = baseMovies;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return new Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getAllMovies() {
    return fetch(`${this._baseMovies}/beatfilm-movies`, {
      })
      .then(res => this._checkResponse(res))
  }
}

export default new MoviesApi(cs.configApi);
