import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';

export default function Main({ loggedIn }) {

    return (
      <section className='main'>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
          </Route>
        </Switch>
        <Footer />
      </section>
    );
}



