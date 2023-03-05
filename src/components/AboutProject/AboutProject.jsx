import './AboutProject.css';
import SectionHeader from '../SectionHeader/SectionHeader';

const AboutProject = ({ myRef }) => {
    return (
        <section className='aboutProject' ref={myRef}>
            <SectionHeader>О проекте</SectionHeader>
            <div className='aboutProject__points-grid'>
                <p className='aboutProject__title'>Дипломный проект включал 5 этапов</p>
                <p className='aboutProject__title'>На выполнение диплома ушло 5 недель</p>
                <p className='aboutProject__subtitle'>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
                    финальные доработки.
                </p>

                <p className='aboutProject__subtitle'>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                    чтобы успешно защититься.
                </p>
            </div>
            <div className='aboutProject__timeline-grid'>
                <p className='aboutProject__timeline-caption aboutProject__timeline-caption_type_backend'>
                    1&nbsp;неделя
                </p>
                <p className='aboutProject__timeline-caption aboutProject__timeline-caption_type_frontend'>
                    4 недели
                </p>
                <p className='aboutProject__caption'>Back-end</p>
                <p className='aboutProject__caption'>Front-end</p>
            </div>
        </section>
    );
};

export default AboutProject;
