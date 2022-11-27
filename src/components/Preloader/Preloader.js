import './Preloader.css';

export default function Preloader({ adder }) {
  return (
    <section className='preloader'>
      <button className='preloader__btn' type="button" onClick={() => adder()}>Ещё</button>
    </section>
  );
}
