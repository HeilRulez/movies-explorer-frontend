import './Main.css';
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';

export default function Main() {
    return (
        <section className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
        </section>
    );
}