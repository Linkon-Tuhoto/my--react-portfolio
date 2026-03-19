import React from 'react';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faLaptop, faPalette, faWrench} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp, faFacebook, faTiktok} from "@fortawesome/free-brands-svg-icons";

function Services() {
  return (
    <div className='bg-gray-50'>
        <h2 className='text-center font-bold text-4xl p-4 pt-8'>My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-20 z-0'>
        <div className='border-1 text-center p-10 border-gray-200 shadow-md hover:shadow-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/80 backdrop-blur-md'>
            <FontAwesomeIcon icon={faGithub} className='mb-4 text-purple-500 text-4xl' />
            <h3 className='font-medium text-lg mb-2'>Web Development</h3>
            <p className='text-gray-600'>I build responsive and high-performance websites using modern technologies, 
                ensuring seamless functionality across all devices.
            </p>
            <button className='bg-purple-500 inline-block px-5 py-2 text-white rounded-full font-medium text-sm mt-4 hover:bg-purple-600 transition-all duration-300'>Read More</button>
        </div>

        <div className='border-1 text-center p-10 border-gray-200 shadow-md hover:shadow-purple-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-md'>
            <FontAwesomeIcon icon={faWhatsapp} className='mb-4 text-purple-500 text-4xl' />
            <h3 className='font-medium text-lg mb-2'>UI/UX Design</h3>
            <p className='text-gray-600'>
                I design clean and user-friendly interfaces focused on delivering intuitive and engaging user experiences.
            </p>
            <button className='bg-purple-500 inline-block px-5 py-2 text-white rounded-full font-medium text-sm mt-4 hover:bg-purple-600 transition-all duration-300'>Read More</button>
        </div>

        <div className='border-1 text-center p-10 border-gray-200 shadow-md hover:shadow-purple-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-md'>
            <FontAwesomeIcon icon={faTiktok} className='mb-4 text-purple-500 text-4xl' />
            <h3 className='font-medium text-lg mb-2'>Maintenance & Support</h3>
            <p className='text-gray-600'>
                I provide ongoing support and updates to keep websites secure, functional, and up to date.
            </p>
            <button className='bg-purple-500 inline-block px-5 py-2 text-white rounded-full font-medium text-sm mt-4 hover:bg-purple-600 transition-all duration-300'>Read More</button>
        </div>
        </div>
    </div>
  )
}

export default Services