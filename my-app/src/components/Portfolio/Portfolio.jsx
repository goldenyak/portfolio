import React from 'react';
import "./Portfolio.css";
import image from "../../images/portfolio_img.jpeg"

const Portfolio = () => {
    return (
        <section className="home-portfolio">
            <div className="wrapper-portfolio">
                <div className="animate--me animate--init">
                    <h5>Selected projects</h5>
                    <h1 className="large">Case studies</h1>
                </div>
                <div className="list">
                    <div className="list-item-portfolio">
                        <img src={image} alt="image"/>
                    </div>
                    <div className="list-item-portfolio">
                        <img src={image} alt="image"/>
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