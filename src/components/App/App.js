import './App.css';
import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import AccessComponent from '../AccessComponent/AccessComponent';
import Main from '../Main/Main';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';

export default function App() {

const [colorStyle, setColorStyle] = useState('#2BE080');
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
            onSubmite={onLogin}
            colorStyle={colorStyle} />
        </Route>
        <Route path='/signup'>
          <AccessComponent
            link={'/signin'}
            linkPreText={'Уже зарегистрированы?'}
            linkText={'Войти'}
            headerText={'Добро пожаловать!'}
            btnText={'Зарегистрироваться'}
            onSubmite={onRegister}
            colorStyle={colorStyle} />
        </Route>
        <Route path='/'>
          <Main loggedIn={loggedIn} handleOut={handleOut} colorStyle={colorStyle} />
        </Route>
        <Route path='/*'>
          <ErrorNotFound />
        </Route>
      </Switch>
    </div>
  );
}
