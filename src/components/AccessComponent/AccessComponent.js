import './AccessComponent.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function AccessComponent({ link, linkPreText, linkText, headerText, btnText, reqMessage, onSubmit }) {


  const { register, formState: {errors, isValid, isDirty}, handleSubmit, reset } = useForm({mode: "onChange"});

  function submit(data) {
    const { userName, email, password } = data
    if (link === '/signin') {
      onSubmit(userName, email, password)
      .then(() => {
      })
    } else if (link === '/signup') {
      onSubmit(email, password)
      .then(() => {
        reset();
      })
    }
  }

  return (
    <section className ='access'>
      <div className='access__container'>
        <div className='access__header'>
          <div className='access__logo' />
          <h1 className ='access__title'>{headerText}</h1>
        </div>
        <form className='access-form' onSubmit={handleSubmit(submit)} name='access' noValidate>
          <div>
            {(link === '/signin') && (<><p className='access-form__text'>Имя</p>
              <input className="access-form__input" type='text'
                {...register('userName', {
                  required: 'Не должно быть пустым',
                  pattern: {value: /^[A-Za-zА-Яа-яЁё-\s]{2,30}$/,
                            message: 'Недопустимые символы'},
                  minLength: {value: 2, message: 'Должно быть больше 2-х символов'},
                  maxLength: {value: 30, message: 'Должно быть больше 30-и символов'}
                })} />
              <span className="access-form__text-error">{errors?.userName && errors?.userName?.message}</span>
              </>)}
            <p className='access-form__text'>E-mail</p>
            <input className="access-form__input" type="email"
              {...register('email', {
                required: 'Не должно быть пустым',
                pattern: {value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,4}/,
                          message: 'Введите E-mail адрес'}
              })} />
            <span className="access-form__text-error">{errors?.email && errors?.email?.message}</span>
            <p className='access-form__text'>Пароль</p>
            <input className="access-form__input" type="password"
              {...register('password', {
                required: 'Не должно быть пустым'
              })} />
            <span className="access-form__text-error">{errors?.password && errors?.password?.message}</span>
          </div>
          <div>
            <span className="access-form__text-error btn-err" id="btn-submit-error">{reqMessage}</span>
            <button className={`access-form__btn-submit ${(!isValid) && 'access-form__btn-submit_disable'}`}
              type="submit" disabled={!isValid}>{btnText}</button>
            <p className="access__text-forLink">
              {linkPreText}
              <Link className="access__link" to={link}>{linkText}</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
