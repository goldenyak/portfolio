import React from 'react';
import frontend_bg from "../../images/frontend_bg.svg";
import bg_home from "../../images/bg_home.png";
import "./HomeTop.css";
import ArrowButton from "../ArrowButton/ArrowButton";

const HomeTop = () => {
    return (
        <section className="home-top">
            <img src={frontend_bg} alt="frontend" className="bg-title"/>

            <div className="bg-image">
                {/*<img src={bg_home} alt="background_home"/>*/}
            </div>

            <div className="wrapper animate__animated animate__slideInUp">
                <div className="row">
                    <div className="main-copy">
                        <h5>Egor Yakovlev</h5>
                        <h1 className="large">Frontend developer with React and TypeScript</h1>
                        <h3 className="header-light">Over the past 9 years, as an art director and designer, I’ve
                            worked with big companies and up-and-coming startups to successfully help them reach
                            their full potential and attract new customers.</h3>
                        <nav className="links">
                            <h4><a href="#" className="hometop_link">View Projects</a></h4>
                            <span>or</span>
                            <h4><a href="#" className="hometop_link">Read About Me</a></h4>
                        </nav>
                    </div>
                </div>
            </div>
            <ArrowButton/>
        </section>
    );
};

export default HomeTop;