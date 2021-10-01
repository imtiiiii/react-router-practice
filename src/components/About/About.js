import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>This is about us</h1>
            <h5>We are so cool</h5>
            <h4>Our :{<NavLink className="navigation mx-1" to="/About/Culture">Culture</NavLink>}</h4>
        </div>
    );
};

export default About;