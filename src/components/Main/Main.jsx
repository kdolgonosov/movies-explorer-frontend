import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import { useRef } from 'react';
const Main = ({ loggedIn }) => {
    const myRef = useRef(null);
    const scroll = () => myRef.current.scrollIntoView();
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <Promo scroll={scroll} />
                <AboutProject myRef={myRef} />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    );
};

export default Main;
