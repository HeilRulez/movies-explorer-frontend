import './Preloader.css';

export default function Preloader() {
  return (
    <section className='preloader'>
      <div className="preloader__download preloader__download_active">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
      <button className='preloader__btn' type="button">Ещё</button>
    </section>
  );
}
