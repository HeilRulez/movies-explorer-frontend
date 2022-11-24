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
  const [errMessage, setErrMessage] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [part, setPart] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [showPreloader, setShowPreloader] = useState(false);
  const amountCard = (window.screen.width < '1280' ? (2) : (3));
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

  function onRegister(name, email, password) {
    return mainApi.signup(name, email, password)
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
    mainApi.reqDelMovie(data.id)
      .then(async () => {
        const movies = await myMovies.filter((item) => item.id !== data.id);
        setMyMovies(movies)
        localStorage.setItem('myMovies', JSON.stringify(movies));
      })
    .catch(err => console.error(`Ошибка ${err} при удалении фильма.`))
  }

  function handleMovieLike(data) {
    const isLiked = myMovies.some(item => item.id === data.id);
    if (isLiked) {
      handleMovieDelete(data);
    } else{
      mainApi.handleLike(data)
      .then(async data => {
        const movies = await [data, ...myMovies]
        await localStorage.setItem('myMovies', JSON.stringify(movies));
        setMyMovies(JSON.parse(localStorage.getItem('myMovies')));
      })
      .catch(err => console.error(`Ошибка ${err} при обработке лайка.`))
    }
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

  function preloader() {
    loader(part)
  }

  function loader(data) {
    setShowPreloader(true)
    const movies = data.slice();
    let items = movies.splice(0, amountCard);
    setPart(movies);
    setAllMovies(allMovies.concat(items));
    if (movies.length === 0) {
      setShowPreloader(false)
    }
}

  function getAllMovies() {
    setErrMessage('');
    allMovies.length = 0;
      return moviesApi.getAllMovies()
      .then((res) => {
        const foundMovies = selectMovies(res);
        if (!localStorage.getItem('phrase')) {
          setErrMessage('Нужно ввести ключевое слово');
        } else if (foundMovies.length === 0) {
          setErrMessage('Ничего не найдено');
          setShowPreloader(false);
        } else {
          loader(foundMovies);
        }
      })
      .catch(() => {
          setErrMessage("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      })
  }

  function getMyMovies() {
   mainApi.getSaveMovie()
    .then((res) => {
      localStorage.setItem('myMovies', JSON.stringify(res));
      setMyMovies(res);
    })
    .catch(err => console.error(`Ошибка ${err} при загрузке фильмов.`))
  }

  function searchMovie() {
    setErrMessage('');
    const foundMovies = selectMovies(JSON.parse(localStorage.getItem('myMovies')));
    if (foundMovies.length === 0) {
      setErrMessage('Ничего не найдено');
    } else {
      setMyMovies(foundMovies)
    }
  }

  useEffect(() => {
    if(loggedIn) {
      getMyMovies();
      history.push('/movies');
    } else {
      getInfo();
    }
  }, [loggedIn, history]);

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
            searchMovie={getAllMovies}
            errMessage={errMessage}
            preload={preloader}
            showPreloader={showPreloader}
            data={allMovies}
            component={Movies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/saved-movies'
            searchMovie={searchMovie}
            errMessage={errMessage}
            funcBtn={handleMovieDelete}
            data={myMovies}
            component={SavedMovies} />
          <ProtectedRoute loggedIn={loggedIn}
            path='/profile'
            handleOut={handleOut}
            onSubmit={handleUpdateUser}
            component={Profile} />

          <ProtectedRoute loggedIn={loggedIn}
            path='/'
            component={ErrorNotFound} />

        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}
