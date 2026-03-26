import React from 'react'
import { assets } from '../../assets/assets'
import { ArrowRight, Calendar1Icon, ClockIcon } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover h-screen bg-center' style={{ backgroundImage: `url(${assets.backgroundImage})` }}>
        <img src={assets.marvelLogo}  className='max-h-11 lg:h-11 mt-20'/>
        <h1 className='text-5xl font-semibold md:text-[70px] md:leading-18 max-w-200'>Gurdians <br/>of the Galaxy</h1>

        <div className='flex items-center gap-4 text-gray-300'>
          <span>Action | Aventure | Sci-Fi</span>
           <div className='flex items-center gap-1'>
             <Calendar1Icon className='w-4.5 h-4.5'/>2026
           </div>
            <div className='flex items-center gap-1'>
             <ClockIcon className='w-4.5 h-4.5'/>3hr 45min
           </div>
        </div>
        <p className='max-w-md text-gray-300'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
        <button className='flex items-center gap-2 p-4 bg-red-400 rounded-full font-semibold'>Explore Movie <span><ArrowRight/></span></button>
    </div>
  )
}

export default Hero
