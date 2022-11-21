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
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [infoMessage, setInfoMessage] = useState('');
  const history = useHistory();

  function resErrMes() {
    setTimeout(() => setInfoMessage(''), 3000);
  }

  function onLogin(email, password) {
    return mainApi.signin(email, password)
      .then(res => {
        if(res._id) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .then(() => history.push('/'))
      .catch(err => {
        resErrMes();
        setInfoMessage('Неверные данные авторизации!\n Попробуйте ещё раз.');
        console.error(`Ошибка ${err} при попытке авторизации.`);
      });
  }

  function onRegister(email, password, name) {
    return mainApi.signup(email, password, name)
    .then(res => {
      if(res) {
        history.push('/signin');
      }
    })
    .catch((err) => {
      resErrMes();
      setInfoMessage('Что-то пошло не так!\n Попробуйте ещё раз.');
      console.error(`Ошибка ${err} при регистрации.`);
    })
  }

  function handleUpdateUser(name, email) {
    mainApi.sendData(name, email)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch(err => console.error(`Ошибка ${err} при отправке данных профиля.`));
  }

  function handleMovieDelete(data) {
    mainApi.getSaveMovie()
    .then((saved) => {
      const movie = saved.filter(item => item.movieId === data.id);
      mainApi.reqDelMovie(movie)
        .then((res) => {
          console.log(res)
        })
    })
    .catch(err => console.error(`Ошибка ${err} при удалении фильма.`))
  }

  function handleMovieLike(data) {
    mainApi.getSaveMovie()
    .then((saved) => {
      const isLiked = saved.some(item => item.movieId === data.id);
      const movie = saved.filter(item => item.movieId === data.id);
      mainApi.handleLike(data, isLiked, movie)
        .then(res => {
          // const movies = ((state) => state.map((c) => {
          //   return c._id === res._id ? res : c}));
          //   console.log(res)
          // localStorage.setItem('allMovies', JSON.stringify(movies))
      })
      .catch(err => console.error(`Ошибка ${err} при обработке лайка.`));
    })
  }

  function handleOut() {
    return mainApi.logOut()
    .then(() => {
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
        localStorage.setItem('allMovies', JSON.stringify(res))
      })
  }

  useEffect(() => {
    if(loggedIn) {
      history.push('/movies');
    } else {
      getInfo();
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route path='/signin'>
            <AccessComponent
              link={'/signup'}
              linkPreText={'Ещё не зарегистрированы?'}
              linkText={'Регистрация'}
              headerText={'Рады видеть!'}
              btnText={'Войти'}
              message={infoMessage}
              onSubmit={onLogin} />
          </Route>
          <Route path='/signup'>
            <AccessComponent
              link={'/signin'}
              linkPreText={'Уже зарегистрированы?'}
              linkText={'Войти'}
              headerText={'Добро пожаловать!'}
              btnText={'Зарегистрироваться'}
              message={infoMessage}
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
            component={SavedMovies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/profile'
            handleOut={handleOut}
            onSubmit={handleUpdateUser}
            component={Profile} />

          <Route path='/*'>
            <ErrorNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
