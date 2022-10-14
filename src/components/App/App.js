import {useState} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

export default function App() {

 const [loggedIn, setLoggedIn] = useState(true);

 function f() {
  setLoggedIn(true);
 };
  return (
    <div className="app">
        <Header loggedIn={loggedIn} />
        <Main />
        {/* <Footer /> */}
    </div>
  );
}
