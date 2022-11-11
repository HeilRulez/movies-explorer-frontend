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
        <FilterCheckbox />
      </form>
      <p className='searchForm__line' />
    </section>
  );
}
