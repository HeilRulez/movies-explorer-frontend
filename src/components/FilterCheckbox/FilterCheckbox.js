import { useEffect, useRef } from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ checked }) {

  const ref = useRef();

  useEffect(() => {
    ref.current.checked = localStorage.getItem('checked')
  }, [])


  function check(e) {
    checked(e.target.checked);
  }

  return (
    <div className='filterCheckbox'>
      <label className='checkbox'>
        <input
          className='checkbox__checked'
          ref={ref}
          onChange={check}
          type="checkbox" name="shortFilms" />
        <span className="checkbox__slider"></span>
      </label>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}
