import './LoaderShow.css';

export default function LoaderShow({ loading }) {
  return (
    <section className={`loaderShow ${loading && 'loaderShow_active'}`}>
      <div className={`loaderShow__download ${loading && 'loaderShow__download_active'}`}>
            <div className="loaderShow__container">
                <span className="loaderShow__round"></span>
            </div>
        </div>
    </section>
  );
}
