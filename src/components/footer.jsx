import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-900 text-gray-400 text-center py-6 border-t border-white mb-0'>
        <p className='text-sm'>&copy; {new Date().getFullYear()} Linkon Tuhoto. All rights reserved</p>
    </div>
  )
}

export default Footer