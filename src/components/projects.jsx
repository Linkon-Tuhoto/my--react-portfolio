import React from 'react'

function Projects() {
  return (
    <div className='bg-white'>
        <h2 className='text-center text-gray-950 font-bold text text-4xl'>My Projects</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 p-15'>
        <div className='bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-[0_10px_30px_rgba(168, 85, 247,0.9)]'>
            <img src="" alt="picture" />
            <h3 className='text-gray-900 font-semibold text-xl mb-1'>School Management Website</h3>
            <p className='text-gray-700 text-sm mb-4'>A dynamic School platform showcasing academic programs, facilities, and services, designed to provide clear and accessible information to students and parents</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>HTML</span>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>CSS</span>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>JAVASCRIPT</span>
            </div>
            <button className='inline-block bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 px-5 py-2 font-medium text-sm'><a href="https://github.com/Linkon-Tuhoto/School-system-website.git">View Project</a></button>
        </div>

        <div className='bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-[0_10px_30px_rgba(168, 85, 247,0.9)]'>
            <img src="" alt="picture" />
            <h3 className='text-gray-900 font-semibold text-xl mb-1'>E-commerce Website</h3>
            <p className='text-gray-700 text-sm mb-4'>A fully responsive e-commerce platform with product listings, interactive UI and seamless shopping experience for users</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>HTML</span>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>CSS</span>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>JAVASCRIPT</span>
            </div>
            <button className='inline-block bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 px-5 py-2 font-medium text-sm'><a href="https://github.com/Linkon-Tuhoto/Modern-E-commerce-website.git">View Project</a></button>
        </div>

        <div className='bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-[0_10px_30px_rgba(168, 85, 247,0.9)]'>
            <img src="" alt="picture" />
            <h3 className='text-gray-900 font-semibold text-xl mb-1'>Hotel Booking Website</h3>
            <p className='text-gray-700 text-sm mb-4'>A hotel website featuring the meals offered and the details of the hotel based on its locality. It is elegant user interface designed to enhance user experience</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>HTML</span>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>CSS</span>
            </div>
            <button className='inline-block bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 px-5 py-2 font-medium text-sm'><a href="https://github.com/Linkon-Tuhoto/hotel-website.git">View Project</a></button>
        </div>
    </div>
    </div>
  )
}

export default Projects