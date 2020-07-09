import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="" style={{ backgroundColor: '#f5f5f0' }}>
                    <div className="card-body">
                        <div className="contact-section">
                            <p className="lead text-info">Fell free to contact with me or need any support</p>
                            <p className="lead"><i class="far fa-envelope"></i> rabby.mohiuddin@gmail.com</p>
                            <p className="lead"> <i className="fab fa-instagram"></i> See my stories on <a href="https://www.instagram.com/xosef" rel="noopener noreferrer" target="_blank">Instagram</a></p>
                            <p className="lead"><i class="fab fa-linkedin"></i> Lets get connected <a href="https://www.linkedin.com/in/mohiuddin-rabby-b49797123" rel="noopener noreferrer" target="_blank">Linkedin</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;