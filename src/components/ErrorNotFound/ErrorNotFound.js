import './ErrorNotFound.css';
import { useHistory, Link } from 'react-router-dom';

export default function ErrorNotFound({ loggedIn }) {

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <section className ='notFound'>
      <div className ='notFound__container'>
          <div>
          <h1 className='notFound__title'>404</h1>
          <p className='notFound__text'>Страница не найдена</p>
        </div>
      </div>
      {loggedIn ? (
        <button className ='notFound__btn' type="button" onClick={goBack}>Назад</button>
      ) : (<Link className="notFound__link" to='/'>Назад</Link>)}
    </section>
  );
}
