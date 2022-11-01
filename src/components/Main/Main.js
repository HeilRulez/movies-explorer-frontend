import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

export default function Main({ loggedIn, handleOut, colorStyle }) {

    return (
      <section className='main'>
        <Header loggedIn={loggedIn} handleOut={handleOut} colorStyle={colorStyle} />
        <Promo />
        <AboutProject colorStyle={colorStyle} />
        <Techs />
        <AboutMe />
        <Footer />
      </section>
    );
}



