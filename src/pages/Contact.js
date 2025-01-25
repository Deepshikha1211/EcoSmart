import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import "../styles/Contact.css"

const Contact = () => {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <Navbar />
            </header>
            <main className="contact-main">
                <div className="contact-content">
                    <div className="contact-left">
                        <h1 className="contact-title">Contact Us</h1>
                        <form className="contact-form">
                            <input type="name" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <div>
                            <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-right">
                        <p></p>
                        <p>Contact: 9876543210</p>
                        <p>Email: info@ecosmart.com</p>
                        <p>Address: 123 Eco Street, Green City</p>
                        <p>Visit Our Nearest Booth</p>
                        <p>Talks and Workshops</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;