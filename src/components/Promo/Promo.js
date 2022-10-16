import './Promo.css';
import NavTab from '../NavTab/NavTab.js';
import HeaderTextTwo from '../HeaderTextTwo/HeaderTextTwo.js';

export default function Promo() {

    const headerTwoStyle = {
        'padding': '160px 0 150px',
        'margin': '0 auto',
        'width': '730px',
    };

    return (
        <section className='promo'>
            <HeaderTextTwo tagetStyle={headerTwoStyle} text={'Учебный проект студента факультета Веб-разработки.'} />
            <NavTab />
        </section>
    );
}