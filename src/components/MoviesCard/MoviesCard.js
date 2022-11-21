import './MoviesCard.css';
import pic from '../../images/pic.jpg';

export default function MoviesCard({ isSaved, funcBtn }) {

  function handleDelClick() {
    funcBtn();
  }

  function handleAddClick() {
    funcBtn();
  }

    return (
        <section className='moviesCard'>
            <div className='moviesCard__container'>
                <h2 className='moviesCard__title'>33 слова о дизайне</h2>
                <p className='moviesCard__time'>1ч 47м</p>
                <button className={`moviesCard__btn ${isSaved ? ('moviesCard__btnDel') : ('moviesCard__btnAdd')}`}
                  onClick={isSaved ? handleDelClick : handleAddClick}
                  type="button" />
            </div>
            <img className='moviesCard__img' src={pic} alt='{data.title}' />
        </section>
    );
}
