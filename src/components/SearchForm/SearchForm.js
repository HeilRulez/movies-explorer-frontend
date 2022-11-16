import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm({ onSub }) {

  const [search, setSearch] = useState(localStorage.getItem('phrase'));

  function handleChangeSearch(e) {
    setSearch(e.target.value);
    localStorage.setItem('phrase', search);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) {
      return
    }
    onSub();
  }

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handleSubmit}>
        <div className='container__input'>
          <input className='searchForm__input'
          onChange={handleChangeSearch}
          value={search} name='searchMovie'
          placeholder='Фильм'
          required />
          <button className='searchForm__submit' type='submit' />
        </div>
        <FilterCheckbox />
      </form>
      <p className='searchForm__line' />
    </section>
  );
}
