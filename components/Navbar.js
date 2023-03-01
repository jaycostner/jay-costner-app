import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="bg-[#181818] flex items-center p-2 shadow-md top-0 sticky z-50 h-14">
        <div >
          <ul className='flex items-center justify-between text-white'>
            <li className="mr-5">Home</li>
            <li className="mr-5">About</li>
            <li className="mr-5">Contact</li>
            <li className="mr-5">Home</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar