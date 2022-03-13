import React from 'react';
import "./Portfolio.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from "../../images/portfolio_img.jpeg"

const Portfolio = () => {
    AOS.init()
    return (
        <section className="home-portfolio">
            <div className="wrapper-portfolio">
                <div data-aos="fade-up" data-aos-duration="3000" className="animate--me animate--init">
                    <h5>Selected projects</h5>
                    <h1 className="large">Case studies</h1>
                </div>
                <div className="list ">
                    <div data-aos="fade-up" data-aos-duration="3000"  className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;