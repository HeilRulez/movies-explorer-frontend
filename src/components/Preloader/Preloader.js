import './Preloader.css';

export default function Preloader({ load, preloader }) {

function yet() {
  preloader()
  // .then(() => console.log())
}

  return (
    <section className='preloader'>
      {load && (
      <div className="preloader__download preloader__download_active">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
      )}
      <button className='preloader__btn' type="button" onClick={yet}>Ещё</button>
    </section>
  );
}
