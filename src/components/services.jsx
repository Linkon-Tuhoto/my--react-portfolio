import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faFacebook, faTiktok} from "@fortawesome/free-brands-svg-icons";
import { faCode, faLayerGroup, faTools } from '@fortawesome/free-solid-svg-icons';

function Services() {
    const[Show, setShow] = useState(false);
  return (
    <section id="services" className='scroll-mt-26'>
    <div className='bg-gray-50'>
        <h2 className='text-center font-bold text-3xl md:text-4xl sm:text-5xl p-4 pt-8'>My Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 p-5 md:p-20'>
        <div className='group md:relative border text-center p-10 border-gray-200 origin-bottom shadow-md hover:shadow-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-md'>
        {/*<div className='absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>*/}
            <FontAwesomeIcon icon={faCode} className='mb-4 text-purple-500 text-4xl md:text-9xl' />
            <h3 className='font-semibold text-xl mb-2 md:text-4xl'>Web Development</h3>
            <div className='md:absolute md:w-full md:bottom-0 md:left-0 md:h-0 md:overflow-hidden transition-all duration-500 md:bg-gradient-to-t md:from-purple-900/80 md:via-purple-700/50 md:to-transparent md:group-hover:h-[100%] md:flex md:flex-col jmd:ustify-center md:items-center md:text-center md:mt-4'>
            <p className='text-gray-600 md:text-2xl'>I build responsive and high-performance websites using modern technologies, 
                ensuring seamless functionality across all devices.
            </p>
            <button className='bg-purple-500 inline-block px-5 py-2 text-white rounded-full font-medium text-sm mt-4 hover:bg-purple-600 transition-all duration-300 md:text-3xl'>Read More</button>
            </div>
        </div>

        <div className='group md:relative border text-center p-10 border-gray-200 origin-bottom shadow-md hover:shadow-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-md'>
            <FontAwesomeIcon icon={faLayerGroup} className='mb-4 text-purple-500 text-4xl md:text-9xl' />
            <h3 className='font-medium text-lg mb-2 md:text-4xl'>UI/UX Design</h3>
            <div className='md:absolute md:w-full md:bottom-0 md:left-0 md:h-0 md:overflow-hidden transition-all duration-500 md:bg-gradient-to-t md:from-purple-900/80 md:via-purple-700/50 md:to-transparent md:group-hover:h-[100%] md:flex md:flex-col jmd:ustify-center md:items-center md:text-center md:mt-4'>
            <p className='text-gray-600 md:text-2xl'>
                I design clean and user-friendly interfaces focused on delivering intuitive and engaging user experiences.
            </p>
            <button className='bg-purple-500 inline-block px-5 py-2 text-white rounded-full font-medium text-sm mt-4 hover:bg-purple-600 transition-all duration-300 md:text-3xl'>Read More</button>
            </div>
        </div>

        <div className='group md:relative border text-center p-10 border-gray-200 origin-bottom shadow-md hover:shadow-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-md'>
            <FontAwesomeIcon icon={faTools} className='mb-4 text-purple-500 text-4xl md:text-9xl' />
            <h3 className='font-medium text-lg mb-2 md:text-4xl'>Maintenance & Support</h3>
            <div className='md:absolute md:w-full md:bottom-0 md:left-0 md:h-0 md:overflow-hidden transition-all duration-500 md:bg-gradient-to-t md:from-purple-900/80 md:via-purple-700/50 md:to-transparent md:group-hover:h-[100%] md:flex md:flex-col jmd:ustify-center md:items-center md:text-center md:mt-4'>
            <p className='text-gray-600 md:text-2xl'>
                I provide ongoing support and updates to keep websites secure, functional, and up to date.
            </p>
            <button className='bg-purple-500 inline-block px-5 py-2 text-white rounded-full font-medium text-sm mt-4 hover:bg-purple-600 transition-all duration-300 md:text-3xl'>Read More</button>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Services