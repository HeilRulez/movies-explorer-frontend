import './AboutProject.css';
import HeaderTextOne from '../HeaderTextOne/HeaderTextOne.js';
import DescriptionText from '../DescriptionText/DescriptionText.js';

export default function AboutProject() {

    const DesStyle = {
        'width': '550px',
    };

    return (
        <section className='about-project'>
            <HeaderTextOne text={'О проекте'} />
            <div className='about-project__content'>
                <h4 className='about-project__text'>Дипломный проект включал 5 этапов</h4>
                <h4 className='about-project__text'>На выполнение диплома ушло 5 недель</h4>
                <DescriptionText tagetStyle={DesStyle} text={'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'} />
                <DescriptionText tagetStyle={DesStyle} text={'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'} />
            </div>
            <div className='about-project__plan'>
                <p className='about-project__text-item'>1 неделя</p>
                <p className='about-project__text-item'>4 недели</p>
                <p className='about-project__text-item_description'>Back-end</p>
                <p className='about-project__text-item_description'>Front-end</p>
            </div>
        </section>
    );
}