import './DescriptionText.css';

export default function DescriptionText({text, tagetStyle}) {
    return (
        <section className='description'>
            <p className={'description__text'} style={tagetStyle}>{text}</p>
        </section>
    );
}