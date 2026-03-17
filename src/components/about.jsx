import React from 'react';
import aboutimg from '../assets/codegirl.jpg';

function About() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-1 pr-[10%] pl-[10%]'>
        <div className='w-[20rem] h-[20rem] mx-auto md:mx-0'>
            <img src={aboutimg} className='w-full h-full object-cover mx-auto' alt="person" />
        </div>
        <div>
            <h2>About Me</h2>
            <h3>Frontend Developer</h3>
            <p>I am a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real digital experiences through clean and efficient code.
               With experience in technologies like React and Tailwind CSS, I focus on creating interfaces that are not only visually appealing but also functional and accessible. I pay close attention to detail, performance, and user experience to ensure high-quality results.
               I am continuously learning and improving my skills, always exploring new tools and trends in web development to stay up to date and deliver better solutions.</p>
        </div>
    </div>
  )
}

export default About