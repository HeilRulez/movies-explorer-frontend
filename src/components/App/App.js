import './App.css';
import {useState} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import Footer from '../Footer/Footer.js';

export default function App() {

 const [loggedIn, setLoggedIn] = useState(false);
 const [colorStyle, setColorStyle] = useState('#2BE080');

  return (
    <div className="app">
        <Header loggedIn={loggedIn} colorStyle={colorStyle} />
        <Main colorStyle={colorStyle} />
        <Movies />
        <Footer />
    </div>
  );
}
