import './Portfolio.css';

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__header'>Портфолио</h2>
            <div className='portfolio__list'>
                <a className='portfolio__item'  href='https://github.com/HeilRulez/how-to-learn'  target={'_blank'} rel={'noreferrer'}>
                    <p className='portfolio__item-text'>Статичный сайт↗</p>
                    <p>↗</p></a>
                <p className='portfolio__line' />
                <a className='portfolio__item'  href='https://github.com/HeilRulez/russian-travel'  target={'_blank'} rel={'noreferrer'}>
                    <p className='portfolio__item-text'>Адаптивный сайт</p>
                    <p>↗</p></a>
                <p className='portfolio__line' />
                <a className='portfolio__item' href='https://github.com/HeilRulez/react-mesto-api-full'  target={'_blank'} rel={'noreferrer'}>
                <p className='portfolio__item-text'>Одностраничное приложение</p>
                    <p>↗</p></a>
            </div>
        </section>
    );
}
