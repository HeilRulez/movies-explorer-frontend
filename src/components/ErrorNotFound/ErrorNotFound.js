import './ErrorNotFound.css';
import { useHistory } from 'react-router-dom';

export default function ErrorNotFound() {

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
      <button className ='notFound__btn' onClick={goBack}>Назад</button>
    </section>
  );
}
