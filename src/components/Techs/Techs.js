import './Techs.css';
import HeaderTextOne from '../TitleText/TitleText.js';

export default function Techs() {
    return (
        <section className='techs'>
            <HeaderTextOne text={'Технологии'} />
            <div className='techs__content'>
                <h2 className='techs__header'>7 технологий</h2>
                <p className='techs__description'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <ul className='techs__list'>
                    <li className='techs__item'></li>
                </ul>
            </div>
        </section>
    );
}