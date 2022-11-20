import './SearchForm.css';
import { useRef, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm({ onSub }) {

  const [search, setSearch] = useState(localStorage.getItem('phrase'));
  const [checked, setChecked] = useState(localStorage.getItem('checked'));

  const inpurRef = useRef();

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checked) {
      localStorage.setItem('checked', true);
    } else {
      localStorage.setItem('checked', '');
    }
    localStorage.setItem('phrase', search);
    onSub();
  }

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handleSubmit}>
        <div className='container__input'>
          <input className='searchForm__input'
          onChange={handleChangeSearch}
          value={search} name='searchMovie'
          ref={inpurRef}
          placeholder='Фильм'
           />
          <button className='searchForm__submit' type='submit' />
        </div>
        <FilterCheckbox checked={setChecked} />
      </form>
      <p className='searchForm__line' />
    </section>
  );
}
