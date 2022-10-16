import './Techs.css';
import HeaderTextOne from '../HeaderTextOne/HeaderTextOne.js';
import HeaderTextTwo from '../HeaderTextTwo/HeaderTextTwo.js';
import DescriptionText from '../DescriptionText/DescriptionText.js';

export default function Techs() {

    const DesStyle = {
        'width': '460px',
        'text-align': 'center',
        'margin': '0 auto',
        'padding-top': '26px'
    };
    const headerTwoStyle = {
        'width': '600px',
        'text-align': 'center',
        'padding': '90px 0 0'
    };

    return (
        <section className='techs'>
            <HeaderTextOne text={'Технологии'} />
            <HeaderTextTwo tagetStyle={headerTwoStyle} text={'7 технологий'} />
            <DescriptionText tagetStyle={DesStyle} text={'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.'} />
        </section>
    );
}