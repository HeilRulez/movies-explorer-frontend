import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__header'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__info'>
                <div className='footer__container-link'>
                    <a className='footer__link' href='https://practicum.yandex.ru' target={'_blank'} rel={'noreferrer'}>Яндекс.Практикум</a>
                    <a className='footer__link' href='https://github.com/yandex-praktikum' target={'_blank'} rel={'noreferrer'}>Github</a>
                    <a className='footer__link' href='#' target={'_blank'} rel={'noreferrer'}>Facebook</a>
                </div>
                <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}
