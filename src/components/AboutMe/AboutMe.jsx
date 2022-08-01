import SectionHeader from '../SectionHeader/SectionHeader';
import './AboutMe.css';
const AboutMe = () => {
    return (
        <section className='aboutme'>
            <SectionHeader>Студент</SectionHeader>
            <div className='aboutme-grid'>
                <div>
                    <h3 className='aboutme__name'>Константин</h3>
                    <p className='aboutme__profession'>Фронтенд-разработчик, 21 год</p>
                    <p className='aboutme__bio'>
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
                        жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
                        кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл
                        курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
                        постоянной работы.
                    </p>
                    <ul className='aboutme__socials'>
                        <li className='aboutme__socials-item'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://t.me/kdolgonosov'
                                className='aboutme__socials-link'
                            >
                                Телеграм
                            </a>
                        </li>
                        <li className='aboutme__socials-item'>
                            <a
                                target='_blank'
                                rel='noreferrer'
                                href='https://github.com/kdolgonosov'
                                className='aboutme__socials-link'
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='aboutme__photo'></div>
            </div>
        </section>
    );
};

export default AboutMe;
