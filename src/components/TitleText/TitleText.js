import './TitleText.css';

export default function TitleText({text}) {
    return (
      <section className='title-text'>
        <h1 className='title-text__header'>{text}</h1>
      </section>
    );
}
