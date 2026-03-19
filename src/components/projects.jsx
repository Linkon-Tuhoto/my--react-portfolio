import React from 'react'

function Projects() {
  return (
    <div className='bg-white'>
        <div className='bg-purple-50 p-6 rounded-2xl border border-purple-200 shadow-sm hover:shadow-[0_10px_30px_rgba(168, 85, 247,0.2)]'>
            <img src="" alt="picture" />
            <h2 className='text-gray-900 font-semibold text-xl mb-1'>Hotel Booking Website</h2>
            <p className='text-gray-700 text-sm mb-4'>A hotel website featuring the meals offered and the details of the hotel based on its locality. It is elegant user interface designed to enhance user experience</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>HTML</span>
                    <span className='bg-white text-purple-600 border border-purple-200 px-3 py-1 text-xs rounded-full'>CSS</span>
            </div>
            <button className='inline-block bg-purple-500 text-white hover:bg-purple-600 transition-all duration-300 px-5 py-2 font-medium text-sm'><a href="">View Project</a></button>
        </div>
    </div>
  )
}

export default Projects