import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useLocation } from 'react-router-dom';

export default function SearchForm({ onSub }) {

  const location = useLocation().pathname;
  const [search, setSearch] = useState(localStorage.getItem(`phrase${location}`) || '');
  const [checked, setChecked] = useState(localStorage.getItem(`checked${location}`));

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (checked) {
      localStorage.setItem(`checked${location}`, true);
    } else {
      localStorage.setItem(`checked${location}`, '');
    }
    localStorage.setItem(`phrase${location}`, search);
    onSub();
  }

  return (
    <section className='searchForm'>
      <form className='searchForm__form' onSubmit={handleSubmit}>
        <div className='container__input'>
          <input className='searchForm__input'
            onChange={handleChangeSearch}
            value={search}
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
