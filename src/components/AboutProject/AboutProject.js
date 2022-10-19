import './AboutProject.css';
import TitleText from '../TitleText/TitleText.js';

export default function AboutProject({colorStyle}) {

    return (
        <section className='about-project'>
            <TitleText text={'О проекте'} />
            <div className='about-project__content'>
                <h4 className='about-project__header'>Дипломный проект включал 5 этапов</h4>
                <p className='about-project__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h4 className='about-project__header'>На выполнение диплома ушло 5 недель</h4>
                <p className='about-project__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className='about-project__graph'>
                <p className='about-project__graph-time' style={{backgroundColor: colorStyle}}>1 неделя</p>
                <p className='about-project__graph-description'>Back-end</p>
                <p className='about-project__graph-time'>4 недели</p>
                <p className='about-project__graph-description'>Front-end</p>
            </div>
        </section>
    );
}