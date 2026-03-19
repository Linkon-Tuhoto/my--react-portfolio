import React from 'react'

function Contact() {
  return (
    <div>
        <h2>Contact Me</h2>
        <form action="POST" className='w-[70rem] m-4 text-center mb-12'>
            <div className='flex justify-between flex-wrap'>
                <input type="text" placeholder='Full Name' className='w-[49%] p-6 size-6.5 bg-gray-50 m-[7rem 0] rounded-[8rem]'/>
                <input type="email" id="mail" placeholder='Email Address' className='w-[49%] p-6 size-6.5 bg-gray-50 m-[7rem 0] rounded-[8rem]' />
            </div>
            <div className='flex justify-between flex-wrap'>
                <input type="number" placeholder='Phone Number' className='w-[49%] p-6 size-6.5 bg-gray-50  m-[7rem 0] rounded-[8rem]' />
                <input type="text" placeholder='Email Subject' className='w-[49%] p-6 size-6.5 bg-gray-50 m-[7rem 0] rounded-[8rem]' />
            </div>
            <textarea name="" id="" rows="10" cols="30"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact