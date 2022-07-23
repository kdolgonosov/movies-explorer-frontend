import './Promo.css';

const Promo = () => {
    return (
        <section className='promo'>
            <div className='promo-wrapper'>
                <h1 className='promo__title'>
                    Учебный проект студента факультета Веб&#8209;разработки.
                </h1>
                <p className='promo__subtitle'>
                    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                </p>
                <button className='promo__button'>Узнать больше</button>
            </div>
            <div className='promo__picture'></div>
        </section>
    );
};

export default Promo;
