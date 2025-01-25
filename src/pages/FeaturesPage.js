import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../components/Navbar'; // Import the Navbar component

import "../styles/FeaturesPage.css";
import Recycle from './recycle.jpeg'; // Correct image path for Recycle
import Green from './green.jpeg'; // Correct image path for Green

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <header className="features-header">
                <Navbar />
            </header>
            <main className="features-main">
                <div className="feature-box">
                    <Link to="/recycle-dashboard" className="feature-link">
                        <img
                            src={Recycle} // Correct image path
                            alt="Recycle"
                            className="feature-image"
                        />
                        <h3 className="feature-title">Recycle and Renew</h3>
                    </Link>
                </div>
                <div className="feature-box">
                    <Link to="/eco-dashboard" className="feature-link">
                        <img
                            src={Green} // Correct image path
                            alt="Green Energy"
                            className="feature-image"
                        />
                        <h3 className="feature-title">Power and Points</h3>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default FeaturesPage;
