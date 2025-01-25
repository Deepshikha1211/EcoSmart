import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/About.css";

const About = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <Navbar />
            </header>
            <main className="about-main">
                <div className="about-content">
                <div className="about-image-container">
    <div className="about-image">
       
    </div>
</div>

                    <div className="about-text">
                        <h1 className="about-title">About EcoSmart</h1>
                        <div className="about-mission">
                            <h2 className="mission-subtitle">Our Mission</h2>
                            <p className="about-description">
                                EcoSmart is dedicated to transforming sustainable living through innovative technology and meaningful engagement. We believe that individual actions can drive collective environmental progress.
                            </p>
                        </div>
                        <div className="about-approach">
                            <h2 className="mission-subtitle">Our Approach</h2>
                            <p className="about-description">
                                By integrating cutting-edge digital solutions with environmental education, we empower users to make informed, impactful choices. Our platform turns sustainability into a rewarding, collaborative experience.
                            </p>
                        </div>
                        <div className="about-values">
                            <h2 className="mission-subtitle">Core Values</h2>
                            <ul className="values-list">
                                <li>Innovation</li>
                                <li>Sustainability</li>
                                <li>Community</li>
                                <li>Transparency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;