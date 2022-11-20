import './Preloader.css';

export default function Preloader({ load, preloader }) {
  return (
    <section className='preloader'>
      {load && (
      <div className="preloader__download preloader__download_active">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
      )}
      <button className='preloader__btn' type="button" onClick={preloader}>Ещё</button>
    </section>
  );
}
