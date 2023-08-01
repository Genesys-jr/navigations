'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import arrowDown from '../../../public/images/arrowDown.svg'
import HamburgerMenu from '../../../public/images/HamburgerMenu.svg'

const Navbar = () => {
  const signUp = () => {

  }
  const login = () => {

  }

  const[isDropDown, setisDropdown] = useState(false);
  const dropDown = () => {
    setisDropdown((prev) => !prev)
  }


  return (
    <div className='flex md:flex items-center justify-between py-5 px-3  text-black  '>

      <div>
      <Image 
        src={logo}
        alt=''
        className='object-contain'
      />
      </div>
      
      <div className=' space-x-6 hidden md:flex '>

      <div className=' relative inline-block'>
      <Link
        href={""}
        onClick={dropDown} 
        className='flex items-center '>
          Features 
          <span className='ml-1.5'><Image src={arrowDown } alt='' className='object-contain '/>
          </span> 
            {
              isDropDown && (
                <div className='absolute  mt-2 p-4 bg-white border shadow z-10'>
                  <ul>
                    <li>Todo list</li>
                    <li>Calender</li>
                    <li>Reminders</li>
                    <li>Planning</li>
                  </ul>
                </div>
              )
            }
          </Link>
      </div>
      <Link 
        href="/company" 
        className='flex items-center '>
          Company 
          <span className='ml-1.5'><Image src={arrowDown } alt='' className='object-contain '/></span>
          </Link>
      <Link href="/careers">Careers</Link>
      <Link href="/about">About</Link>
      </div>

      <div className='space-x-6 hidden md:flex'>

      <button
        type='button'
        onClick={login}
        className=' p-2 rounded-xl'
        >
        Login
      </button>
      <button
        type='button'
        onClick={signUp}
        className='p-2 rounded-xl border border-gray-700'
      >
        Register
      </button>
      </div>
      <div className='sm:hidden'>
           <Image
           src={HamburgerMenu}
          alt=''
          onClick={dropDown}
            // {
            //   isDropDown && (
            //     <div className='absolute  mt-2 p-4 bg-white border shadow z-10'>
            //       <ul>
            //         <li>Todo list</li>
            //         <li>Calender</li>
            //         <li>Reminders</li>
            //         <li>Planning</li>
            //       </ul>
            //     </div>
            //   )
            // }
          />
      </div>
    </div>
  )
}

export default Navbar