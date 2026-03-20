import React from 'react'

function Contact() {
  return (
    <section id="contact" className='scroll-mt-26'>
    <div className='text-center bg-teal-50 py-16 px-5 sm:px-10 md:px-20'>
        <div className='max-w-3xl mx-auto bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-5 sm:p-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-950 text-center mb-6'>Contact Me</h2>
        <div className='flex justify-center items-center'>
        <form action="POST" className='w-[70rem] m-4 mb-12 space-y-4'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 p-3 '>
                <input type="text" placeholder='Full Name' required className='w-full max-w-3xl p-6 size-6.5 bg-indigo-50 m-[.7rem 0] rounded-[.8rem] border border-indigo-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition backdrop-blur-sm text-gray-900 placeholder-gray-400'/>
                <input type="email" id="mail" placeholder='Email Address' required className='w-full max-w-3xl p-6 size-6.5 bg-indigo-50 m-[.7rem 0] rounded-[.8rem] border border-indigo-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition backdrop-blur-sm text-gray-900 placeholder-gray-400' />
            </div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 p-3'>
                <input type="tel" placeholder='Phone Number' required className='w-full max-w-3xl p-6 size-6.5 bg-indigo-50  m-[.7rem 0] rounded-[.8rem] border border-indigo-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition backdrop-blur-sm text-gray-900 placeholder-gray-400' />
                <input type="text" placeholder='Email Subject' className='w-full max-w-3xl p-6 size-6.5 bg-indigo-50 m-[.7rem 0] rounded-[.8rem] border border-indigo-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition backdrop-blur-sm text-gray-900 placeholder-gray-400' />
            </div>
            <textarea name="" id="" rows="6" cols="30" placeholder="Your Message" className='w-[100%] p-5 md:p-6 bg-indigo-50  m-[.7rem 0] mt-3 rounded-[.8rem] border border-indigo-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition backdrop-blur-sm text-gray-900 placeholder-gray-400'></textarea>
            <button type="submit" className='block mx-auto bg-purple-500 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-600 hover:shadow-lg transition-all duration-300'>Submit</button>
        </form>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Contact