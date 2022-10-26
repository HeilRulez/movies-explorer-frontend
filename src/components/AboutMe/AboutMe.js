import './AboutMe.css';
import HeaderTextOne from '../TitleText/TitleText.js';
import Portfolio from '../Portfolio/Portfolio.js';
import foto from '../../images/foto.jpg'


export default function AboutMe() {
    return (
        <section className='about-me'>
            <HeaderTextOne text={'Студент'} />
            <div className='about-me__container'>
                <img className='about-me__foto' src={foto} alt='Гуляев Сергей'/>
                <h2 className='about-me__name'>Серёжа</h2>
                <p className='about-me__header'>Веб-разработчик, 33 года</p>
                <p className='about-me__description'>
                    Очень интересная история как так вышло. Очень интересная история 
                    как так вышло. Очень интересная история как так вышло. Очень 
                    интересная история как так вышло. Очень интересная история 
                    как так вышло. Очень интересная история как так вышло. Очень 
                    интересная история как так вышло. Очень интересная история как 
                    так вышло. Очень интересная история как так вышло. Очень 
                    интересная история как так вышло. Очень интересная история 
                    как так вышло.</p>
                <div className='about-me__links'>
                    <a className='about-me__link' href='https://vk.com/heil_rulez' target={'_blank'} rel={'noreferrer'}>VK</a>
                    <a className='about-me__link' href='https://github.com/HeilRulez' target={'_blank'} rel={'noreferrer'}>Github</a>
                </div>
            </div>
            <Portfolio />
        </section>
    );
}
