import './Footer.css';

export default function Footer() {
    return (
        <section className='footer'>
            <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__info'>
                <div className='footer__container-link'>
                    <a className='footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/yandex-praktikum'>Github</a>
                </div>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
            </div>
        </section>
    );
}