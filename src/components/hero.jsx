import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faFacebook, faTiktok} from "@fortawesome/free-brands-svg-icons";
import codie from '../assets/mine.jpg';


function Hero() {
  return (
    <section id="home" className='scroll-mt-26'>
    <div className='grid grid-cols-1 md:flex md:justify-center md:items-center scroll-smooth pt-[10%] md:pt-[3%] '>
    <div className='text-center p-8 md:p-16'>
        <h3 className="text-gray-700 text-[3.2rem] font-normal leading-relaxed text-lg ">Hello 👋,</h3>
        <h1 className="text-purple-600 text-5xl mt-2 text-[3.2rem] md:text-[4.4rem] font-bold leading-13">I'm Linkon Tuhoto</h1>
        <h3 className="text-purple-700 text-3xl md:text-4xl mt-1 mb-6 leading-snug font-bold">And I am a {" "} <span className="text-purple-400">Frontend Developer</span></h3>
        <p className="text-gray-700 mt-4 text-base md:text-lg font-normal leading-relaxed mx-auto max-w-[800px]">I build responsive and user-friendly websites that bring ideas to life.  
           Passionate about clean code, modern design, and creating seamless user experiences.
        </p>
        <div className="text-purple-600 hover:text-purple-700 text-2xl flex justify-center mt-6">
            <a href="https://github.com/Linkon-Tuhoto" alt="icon" target="_blank"><FontAwesomeIcon icon={faGithub} className="text-2xl mx-2" /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="text-2xl mx-2"  /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faFacebook} className="text-2xl mx-2"  /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faTiktok} className="text-2xl mx-2"  /></a>
            <a href="#" alt="icon" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2"  /></a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors mt-6 inline-block"><a href="#">Download CV</a></button>
    </div>

    <div className="w-[16rem] h-[16rem] mx-auto md:mx-0">
        <img src={codie} className="mx-auto rounded-2xl shadow-lg animate-float w-full h-full object-cover" alt="person"  />
    </div>

    </div> 
    </section>
    );
}

export default Hero