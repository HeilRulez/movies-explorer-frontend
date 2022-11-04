import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm() {

  const [search, setSearch] = useState('');

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handleSubmit}>
        <div className='container__input'>
          <input className='searchForm__input'
          onChange={handleChangeSearch}
          value={search} name='searchMovie'
          placeholder='Фильм' />
          <button className='searchForm__submit' type='submit' />
        </div>
        <div className='container__label'>
          <label label className='checkbox'>
            <input className='checkbox__checked' type="checkbox" name="shortFilms" />
            <span class="checkbox__slider"></span>
          </label>
          <p className='checkbox__text'>Короткометражки</p>
        </div>
      </form>
    </section>
  );
}
