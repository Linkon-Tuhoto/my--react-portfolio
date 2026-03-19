import React from 'react';
import aboutimg from '../assets/codegirl.jpg';

function About() {
  return (
    <section id="about" className='scroll-mt-26'>
    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 p-10 px-6 sm:px-10 md:px-20 lg:px-32 py-10 sm:py-14 md:py20 items-center bg-indigo-50'>
        <div className='w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mx-auto md:mx-0 transition-transform duration-500 hover:scale-106 shadow-lg overflow-hidden'>
            <img src={aboutimg} className='w-full h-full object-cover mx-auto rounded-2xl' alt="person" />
        </div>
        <div>
            <h2 className='text-3xl sm:4xl md:5xl font-bold text-left mb-2 text-gray-950'>About Me</h2>
            <h3 className='text-xl sm:text-2xl sm:text-3xl font-medium p-1.5 mb-4'>Frontend Developer</h3>
            <p className='font-light leading-7 sm:leading-8 text-base sm:text-lg md:text-lg mb-6'>I am a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real digital experiences through clean and efficient code.
               With experience in technologies like React and Tailwind CSS, I focus on creating interfaces that are not only visually appealing but also functional and accessible. I pay close attention to detail, performance, and user experience to ensure high-quality results.
               I am continuously learning and improving my skills, always exploring new tools and trends in web development to stay up to date and deliver better solutions.</p>
            <button className='bg-amber-600 p-4 rounded text-amber-50 text-2xl mt-3'>Read More</button>
        </div>
    </div>
    </section>
  )
}

export default About