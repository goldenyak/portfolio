import React from 'react';
import "./Portfolio.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../../images/portfolio_img.jpeg";
import {IoReturnDownForwardOutline} from "react-icons/io5";

const Portfolio = () => {
    AOS.init()
    return (
        <section className="home-portfolio">
            <div className="wrapper-portfolio">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h5>Selected projects</h5>
                    <h1 className="large">Case studies</h1>
                </div>
                <div className="list">
                    <div className="list-item-portfolio">
                        <img src={image} alt="image"/>
                        <div className="description">
                            <span className="h5">2021</span>
                            <span className="h2">Todolist project</span>
                        </div>
                        <div className="action">
                            <span className="h5">2021</span>
                            <span className="h2">Todolist project</span>
                            <span className="link">View project
                                <IoReturnDownForwardOutline className="iconLink"/>
                            </span>
                        </div>
                        <div className="itemBackground"></div>
                    </div>
                    <div className="list-item-portfolio">
                        <img src={image} alt="image"/>
                        <div className="description">
                            <span className="h5">2021-2022</span>
                            <span className="h2">TaNa.org - social startup</span>
                        </div>
                        <div className="action">
                            <span className="h5">2021-2022</span>
                            <span className="h2">TaNa.org - social startup</span>
                            <span className="link">View project
                                <IoReturnDownForwardOutline className="iconLink"/>
                            </span>
                        </div>
                        <div className="itemBackground"></div>
                    </div>
                    <div className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                    <div className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;