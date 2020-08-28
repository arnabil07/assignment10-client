import React from 'react';
import logo from '../../img/logo/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
        <img src={logo} alt=""/>
        <a href="/log-in"><button>Log In</button></a>
        <nav>
            <a href="/home">Home</a>
            <a href="/courses">Courses</a>
            <a href="/services">Our Services</a>
            <a href="/contact">Contact</a>
        </nav>
         

                <div className="heading">
                    <h1>Online Courses </h1>
                    <p>Build skills with courses, certificates,</p><p> and degrees online from world-class universities and companies</p>
                    <div className="join-btn"><a href="#">Join now</a></div>
                </div>
        </div>
     
    );
};

export default Header;