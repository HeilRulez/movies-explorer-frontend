import './MoviesCard.css';
import pic from '../../images/pic.jpg';

export default function MoviesCard() {
    return (
        <section className='moviesCard'>
            <div className='moviesCard__container'>
                <h2 className='moviesCard__title'>33 слова о дизайне</h2>
                <p className='moviesCard__time'>1ч 47м</p>
                {/* <BtnComponent className='moviesCard__btn'/> */}
                <button className='moviesCard__btn' />
            </div>
            <img className='moviesCard__img' src={pic} alt='{data.title}' />
        </section>
    );
}
