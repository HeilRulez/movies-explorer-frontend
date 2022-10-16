export default function AboutProject() {
    return (
        <section className='about-project'>
            <h2 className='about-project__header'>О проекте</h2>
            <div className='about-project__content'>
                <h4 className='about-project__text'>Дипломный проект включал 5 этапов</h4>
                <p className='about-project__text-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h4 className='about-project__text'>На выполнение диплома ушло 5 недель</h4>
                <p className='about-project__text-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                <p className='about-project__text-item'>1 неделя</p>
                <p className='about-project__text-item_description'>Back-end</p>
                <p className='about-project__text-item'>4 недели</p>
                <p className='about-project__text-item_description'>Front-end</p>
            </div>
        </section>
    );
}