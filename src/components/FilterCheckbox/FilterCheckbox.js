import { useState } from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {

  const [value, setValue] = useState(true);

  function check() {
    setValue(!value);
    localStorage.setItem('checked', value);
  }

  return (
    <div className='filterCheckbox'>
      <label className='checkbox'>
        <input className='checkbox__checked' onChange={check}
          type="checkbox" name="shortFilms" />
        <span className="checkbox__slider"></span>
      </label>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}
