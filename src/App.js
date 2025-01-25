import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import FeaturesPage from './pages/FeaturesPage';
import EcoDashboard from './components/EcoDashboard';
import RecDashboard from './components/RecycleDashboard';
import Recycle from './pages/Recycle';
import EcoRewards from './pages/EcoRewards'; // Assuming you have this page
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                
                {/* Parent route for EcoDashboard */}
                <Route path="/eco-dashboard/*" element={<EcoDashboard />} />
                
                {/* Parent route for RecDashboard */}
                <Route path="/recycle-dashboard/*" element={<RecDashboard />} />
                
                {/* Recycle page route */}
                <Route path="/recycle" element={<Recycle />} />
                <Route path="/eco-rewards" element={<EcoRewards />} /> 

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> 

            </Routes>
        </Router>
    );
};

export default App;
