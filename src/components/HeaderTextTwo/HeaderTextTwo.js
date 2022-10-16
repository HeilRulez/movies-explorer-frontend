import './HeaderTextTwo.css';

export default function HeaderTextTwo({text, tagetStyle}) {
    return (
        <section className='header-two'>
            <h2 className='header-two__text' style={tagetStyle}>{text}</h2>
        </section>
    );
}