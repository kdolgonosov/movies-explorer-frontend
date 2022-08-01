import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer-wrapper'>
                <p className='footer__year'>&copy; {new Date().getFullYear()}</p>
                <ul className='footer__links'>
                    <li className='footer__links-item'>
                        <a
                            className='footer__link'
                            rel='noreferrer'
                            target='_blank'
                            href='https://practicum.yandex.ru'
                        >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className='footer__links-item'>
                        <a
                            className='footer__link'
                            rel='noreferrer'
                            target='_blank'
                            href='https://github.com/kdolgonosov'
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
