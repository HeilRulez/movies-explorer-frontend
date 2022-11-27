import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AccessComponent from '../AccessComponent/AccessComponent';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import selectMovies from '../../utils/selection';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoMessage, setInfoMessage] = useState('');
  const [myMovies, setMyMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if(loggedIn) {
      getMyMovies();
    } else {
      getInfo();
    }
  }, [loggedIn]);

  function resErrMes() {
    setTimeout(() => setInfoMessage(''), 3000);
  }

  function onLogin(email, password) {
    return mainApi.signin(email, password)
      .then(res => {
        if(res._id) {
          setLoggedIn(true);
          setCurrentUser(res);
          getMyMovies();
        }
      })
      .then(() => history.push('/movies'))
      .catch(err => {
        resErrMes();
        setInfoMessage('Неверные данные авторизации!\n Попробуйте ещё раз.');
        console.error(`Ошибка ${err} при попытке авторизации.`);
      });
  }

  function onRegister(name, email, password) {
    return mainApi.signup(name, email, password)
    .then(res => {
      if(res._id) {
        onLogin(email, password)
      }
    })
    .catch((err) => {
      resErrMes();
      setInfoMessage('Что-то пошло не так!\n Попробуйте ещё раз.');
      console.error(`Ошибка ${err} при регистрации.`);
    })
  }

  function handleUpdateUser(name, email) {
    return mainApi.sendData(name, email)
    .then((res) => {
      resErrMes();
      setInfoMessage('Данные пользователя успешно изменены.');
      setCurrentUser(res);
    })
    .catch((err) => {
      if (err.message === '409') {
        resErrMes();
        setInfoMessage('Пользователь с таким E-mail уже зарегистрирован.');
      }
      console.error(`Ошибка ${err} при отправке данных профиля.`)
  });
  }

  function handleMovieDelete(data) {
    mainApi.reqDelMovie(data._id)
      .then((res) => {
        const movies = myMovies.filter((item) => item._id !== res._id);
        localStorage.setItem('myMovies', JSON.stringify(movies));
        setMyMovies(movies);
      })
    .catch(err => console.error(`Ошибка ${err} при удалении фильма.`))
  }

  function handleMovieLike(data) {
    const isLiked = myMovies.some(item => item.movieId === data.id);
    if (isLiked) {
      const item = myMovies.filter(item => (item.movieId === data.id))[0];
      handleMovieDelete(item);
    } else {
      mainApi.handleLike(data)
      .then(data => {
        const movies = [data, ...myMovies]
        localStorage.setItem('myMovies', JSON.stringify(movies));
        setMyMovies(JSON.parse(localStorage.getItem('myMovies')));
      })
      .catch(err => console.error(`Ошибка ${err} при обработке лайка.`))
    }
  }

  function handleOut() {
    return mainApi.logOut()
    .then(() => {
      localStorage.clear();
      setLoggedIn(false);
      history.push('/');
    })
    .catch(err => console.error(`Ошибка ${err} при выходе из аккаунта.`))
  }

  function getInfo() {
    mainApi.getUserInfo()
    .then((dataUser) => {
      setLoggedIn(true);
      setCurrentUser(dataUser)
      })
      .catch(err => console.error(`Ошибка ${err}. Не авторизировано.`));
  }

  function getAllMovies() {
    return moviesApi.getAllMovies()
      .then((res) => {
        localStorage.setItem('allMovies', JSON.stringify(res));
        return res;
      })
  }

  function getMyMovies() {
   mainApi.getSaveMovie()
    .then((res) => {
      const myMovies = res.filter(item => item.owner === currentUser._id)
      localStorage.setItem('myMovies', JSON.stringify(myMovies));
      setMyMovies(myMovies);
    })
    .catch(err => console.error(`Ошибка ${err} при загрузке фильмов.`))
  }

  function searchInMyMovie(phrase, checked) {
    const savedMovies = JSON.parse(localStorage.getItem('myMovies'));
    const foundMovies = selectMovies(savedMovies, phrase, checked);
    if (foundMovies.length === 0) {
      return 'Ничего не найдено';
    } else {
      setMyMovies(foundMovies);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path='/signin'>
            <AccessComponent loggedIn={loggedIn}
              link={'/signup'}
              linkPreText={'Ещё не зарегистрированы?'}
              linkText={'Регистрация'}
              headerText={'Рады видеть!'}
              btnText={'Войти'}
              reqMessage={infoMessage}
              onSubmit={onLogin} />
          </Route>
          <Route path='/signup'>
            <AccessComponent loggedIn={loggedIn}
              link={'/signin'}
              linkPreText={'Уже зарегистрированы?'}
              linkText={'Войти'}
              headerText={'Добро пожаловать!'}
              btnText={'Зарегистрироваться'}
              reqMessage={infoMessage}
              onSubmit={onRegister} />
          </Route>

          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>

          <ProtectedRoute loggedIn={loggedIn}
            path='/movies'
            funcBtn={handleMovieLike}
            getAllMovies={getAllMovies}
            component={Movies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/saved-movies'
            funcBtn={handleMovieDelete}
            searchMovie={searchInMyMovie}
            data={myMovies}
            component={SavedMovies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/profile'
            handleOut={handleOut}
            onSubmit={handleUpdateUser}
            reqMessage={infoMessage}
            component={Profile} />

          <Route path='/*'>
            <ErrorNotFound loggedIn={loggedIn} />
          </Route>

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
