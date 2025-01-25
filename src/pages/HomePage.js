import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component

import "../styles/HomePage.css"

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <Navbar />
            </header>
            <main className="homepage-main">
                <div className="text-container">
                    <h2 className="main-text league-spartan">SMALL ACTIONS</h2>
                    <h2 className="main-text miss-trully">Big Rewards</h2>
                    <h2 className="sub-text league-spartan">Start Living Sustainably Today</h2>
                </div>
            </main>
        </div>
    );
};

export default HomePage;