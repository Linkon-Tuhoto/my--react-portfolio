import React from 'react';
import aboutimg from '../assets/codegirl.jpg';

function About() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-3 p-10 md:pr-[10%] md:pl-[20%]'>
        <div className='w-[20rem] h-[20rem] mx-auto md:mx md:w-[30rem] md:h-[30rem]'>
            <img src={aboutimg} className='w-full h-full object-cover mx-auto rounded-2xl' alt="person" />
        </div>
        <div>
            <h2 className='text-4xl font-bold text-left'>About Me</h2>
            <h3 className='text-2xl font-medium p-1.5 '>Frontend Developer</h3>
            <p className='font-light leading-7'>I am a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into real digital experiences through clean and efficient code.
               With experience in technologies like React and Tailwind CSS, I focus on creating interfaces that are not only visually appealing but also functional and accessible. I pay close attention to detail, performance, and user experience to ensure high-quality results.
               I am continuously learning and improving my skills, always exploring new tools and trends in web development to stay up to date and deliver better solutions.</p>
            <button className='bg-amber-600 p-4 rounded text-amber-50 text-2xl mt-3'>Read More</button>
        </div>
    </div>
  )
}

export default About