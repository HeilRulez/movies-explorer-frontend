import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='filterCheckbox'>
      <label label className='checkbox'>
        <input className='checkbox__checked' type="checkbox" name="shortFilms" />
        <span class="checkbox__slider"></span>
      </label>
      <p className='checkbox__text'>Короткометражки</p>
    </div>
  );
}
