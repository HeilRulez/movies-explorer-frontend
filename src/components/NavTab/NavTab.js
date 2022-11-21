import './NavTab.css';

export default function NavTab() {
    return (
        <nav className='nav-tab'>
            <a className="nav-tab__link" href='#aboutProject'>О проекте</a>
            <a className="nav-tab__link" href='#techs'>Технологии</a>
            <a className="nav-tab__link" href='#aboutMe'>Студент</a>
        </nav>
    );
}
