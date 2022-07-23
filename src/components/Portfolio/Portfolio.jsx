import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__projects'>
                <li className='portfolio__projects-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/kdolgonosov/how-to-learn'
                        className='portfolio__projects-item-link'
                    >
                        Статичный сайт
                    </a>
                    <button className='portfolio__projects-item-button'>↗</button>
                </li>
                <li className='portfolio__projects-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://kdolgonosov.github.io/russian-travel/index.html'
                        className='portfolio__projects-item-link'
                    >
                        Адаптивный сайт
                    </a>
                    <button className='portfolio__projects-item-button'>↗</button>
                </li>
                <li className='portfolio__projects-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://kdolgonosov.github.io/mesto/'
                        className='portfolio__projects-item-link'
                    >
                        Одностраничное приложение
                    </a>
                    <button className='portfolio__projects-item-button'>↗</button>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;
