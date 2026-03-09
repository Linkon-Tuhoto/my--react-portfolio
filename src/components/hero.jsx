import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import codie from '../assets/codegirl.jpg';

function Hero() {
  return (
    <div className='flex justify-center items-center scroll-smooth'>
    <div>
        <h3 className="text-gray-700 text-[3.2rem] ">Hello 👋,</h3>
        <h1 className="text-purple-600 text-5xl mt-2 text-[5.4rem] font-bold leading-13">I'm Linkon Tuhoto</h1>
        <h3 className="text-purple-700 text-3xl mt-1 mb-6">And I am a <span className='text-purple-400'>Frontend Developer</span></h3>
        <p className="text-gray-700 mt-4 ">I build responsive and user-friendly websites that bring ideas to life.  
           Passionate about clean code, modern design, and creating seamless user experiences.
        </p>
        <div className="text-purple-600 hover:text-purple-700 text-2xl">
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faTiktok} /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg"><a href="#">Download CV</a></button>
    </div>

    <div className="mx-auto w-64 h-64 rounded-2xl shadow-lg animate-float">
        <img src={codie} className="" alt="person" />
    </div>

    </div>
  )
}

export default Hero