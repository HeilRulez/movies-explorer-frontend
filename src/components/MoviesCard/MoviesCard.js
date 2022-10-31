import './MoviesCard.css';

export default function MoviesCard({data}) {
    return (
        <section className='moviesCard'>
            <div className='moviesCard__container'>
                <h2 className='moviesCard__title'>{data.title}</h2>
                <p className='moviesCard__time'>{data.time}</p>
                {/* <BtnComponent className='moviesCard__btn'/> */}
            </div>
            <img className='moviesCard__img' src={data.srcImg} alt={data.title} />
        </section>
    );
}