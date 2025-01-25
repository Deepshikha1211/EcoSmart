import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/About';
import FeaturesPage from '../pages/FeaturesPage';
import Contact from './pages/Contact';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pages/About" element={<AboutPage />} />
                <Route path="/pages/FeaturesPage" element={<FeaturesPage />} />
                <Route path="/pages/Contact" element={<Contact />} /> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default App;
