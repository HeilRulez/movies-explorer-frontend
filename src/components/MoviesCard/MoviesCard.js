import './MoviesCard.css';

export default function MoviesCard({title, time, srcImg}) {
    return (
        <section className='moviesCard'>
            <h2 className='moviesCard__title'>{title}</h2>
            <p className='moviesCard__time'>{time}</p>
            <img className='moviesCard__img' src={srcImg} alt={title} />
        </section>
    );
}