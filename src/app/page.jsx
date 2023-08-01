
import Navbar from '@/app/components/Navbar'
import React from 'react'
import Image from 'next/image'
// import { useState } from 'react'
import databiz from '../../public/images/databiz.svg'
import audiophile from '../../public/images/audiophile.svg'
import meet from '../../public/images/meet.svg'
import maker from '../../public/images/maker.svg'
import desktop from '../../public/images/desktop.png'
import mobile from '../../public/images/mobile.png'



export default function Home() {
  return (
    <main className='min-h-screen md:mx-10 '>
      <Navbar/>
      <Image src={mobile} alt='' height={200} className='object-contain md:hidden w-full ' />
     <div className='flex mx-10 md:mx-20 items-center justify-between  pt-11'> 
      <div className='space-y-3 md:space-y-10 '>
        <div className='space-y-3 items-center justify-center'>

        <h1 className='text-7xl font-extrabold '>Make <br /> remote work</h1>
        <p>
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, <br /> and watch productivity soar.
        </p>
      <button
        type='button'
        className='py-2 px-6 bg-black text-white font-semibold  rounded-xl '
        >
        Learn More
      </button>
        </div>
      <div className='flex  space-x-7'>
        <Image src={databiz} alt='' className='object-contain'/>
        <Image src={audiophile} alt='' className='object-contain'/>
        <Image src={meet} alt='' className='object-contain'/>
        <Image src={maker} alt='' className='object-contain'/>
      </div>
      </div>
      <div>
        <Image src={desktop} alt='' height={400} className='object-contain hidden md:block ' /> 
      
      </div>
     </div>
    </main>
  )
}
