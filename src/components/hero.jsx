import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faWhatsapp, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className='p-0 m-0 box-border rounded outline-none scroll-smooth'>
    <div>
        <h3>Hello 👋,</h3>
        <h1>I'm Linkon Tuhoto</h1>
        <h3>And I am a Frontend Developer</h3>
        <p>I build responsive and user-friendly websites that bring ideas to life.  
           Passionate about clean code, modern design, and creating seamless user experiences.
        </p>
        <div>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
        </div>
        <a href="#">Download CV</a>
    </div>

    <div>
        <img src="#" alt="person" />
    </div>

    </div>
  )
}

export default Hero