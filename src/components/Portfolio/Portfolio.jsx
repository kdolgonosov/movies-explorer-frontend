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
                        <span className='portfolio__projects-item-span'>Статичный сайт</span>

                        <button className='portfolio__projects-item-button' type='button'>
                            ↗
                        </button>
                    </a>
                </li>
                <li className='portfolio__projects-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://kdolgonosov.github.io/russian-travel/index.html'
                        className='portfolio__projects-item-link'
                    >
                        <span className='portfolio__projects-item-span'>Адаптивный сайт</span>
                        <button className='portfolio__projects-item-button' type='button'>
                            ↗
                        </button>
                    </a>
                </li>
                <li className='portfolio__projects-item'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://kdolgonosov.github.io/mesto/'
                        className='portfolio__projects-item-link'
                    >
                        <span className='portfolio__projects-item-span'>
                            Одностраничное приложение
                        </span>

                        <button className='portfolio__projects-item-button' type='button'>
                            ↗
                        </button>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;
