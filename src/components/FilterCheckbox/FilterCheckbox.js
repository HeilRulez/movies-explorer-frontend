import './FilterCheckbox.css';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function FilterCheckbox({ checked }) {

  const ref = useRef();
  const location = useLocation().pathname;

  useEffect(() => {
    ref.current.checked = localStorage.getItem(`checked${location}`)
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
