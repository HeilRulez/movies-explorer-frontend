import './HeaderTextOne.css';

export default function HeaderTextOne({text}) {
    return (
        <section className='header-one'>
            <h1 className='header-one__text'>{text}</h1>
        </section>
    );
}