import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AccessComponent from '../AccessComponent/AccessComponent';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

export default function App() {

const [loggedIn, setLoggedIn] = useState(true);
const history = useHistory();

function onLogin(email, password) {
  // return api.access(email, password, '/signin')
  //   .then(res => {
  //     if(res._id) {
  //       setLoggedIn(true);
  //       setDataUser(res);
  //       getCards();
  //       getInfo();
  //     }
  //   })
  //   .then(() => history.push('/'))
  //   .catch(err => {
  //     setInfoMessage('Неверные данные авторизации!\n Попробуйте ещё раз.');
  //     setInfoState(false);
  //     setInfoShow(true);
  //     console.error(`Ошибка ${err} при попытке авторизации.`);
  //   });
}

function onRegister(email, password) {
  // return api.access(email, password, '/signup')
  // .then(res => {
  //   if(res) {
  //     setInfoMessage('Вы успешно\n зарегистрировались!');
  //     setInfoState(true);
  //     history.push('/signin');
  //   }
  // })
  // .catch((err) => {
  //   setInfoMessage('Что-то пошло не так!\n Попробуйте ещё раз.');
  //   setInfoState(false);
  //   console.error(`Ошибка ${err} при регистрации.`);
  // })
  // .finally(() => {
  //   setInfoShow(true);
  // })
}

function handleOut() {
  // return api.logOut()
  // .then(() => {
  //   setLoggedIn(false);
  // })
  // .catch(err => console.error(`Ошибка ${err} при выходе из аккаунта.`))
}

// useEffect(() => {
//   if(loggedIn) {
//     history.push('/');
//   } else {

//   }
// }, [loggedIn]);

  return (
    <div className="app">
      <Switch>
        <Route path='/signin'>
          <AccessComponent
            link={'/signup'}
            linkPreText={'Ещё не зарегистрированы?'}
            linkText={'Регистрация'}
            headerText={'Рады видеть!'}
            btnText={'Войти'}
            onSubmite={onLogin} />
        </Route>
        <Route path='/signup'>
          <AccessComponent
            link={'/signin'}
            linkPreText={'Уже зарегистрированы?'}
            linkText={'Войти'}
            headerText={'Добро пожаловать!'}
            btnText={'Зарегистрироваться'}
            onSubmite={onRegister} />
        </Route>
        <Route path='/movies'>
          <Header loggedIn={loggedIn} />
          <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header loggedIn={loggedIn} />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header loggedIn={loggedIn} />
          <Profile handleOut={handleOut} />
        </Route>
        <Route path='/'>
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        {/* <Route path='/*'>
          <ErrorNotFound />
        </Route> */}
      </Switch>
      {/* <InfoTooltip isOpen={true}
        onClose={}
        infoMessage={'ErrorMesage'}
        infoState={'ok'}
        /> */}
    </div>
  );
}
