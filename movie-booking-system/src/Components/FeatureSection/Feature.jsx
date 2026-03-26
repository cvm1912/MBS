import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { dummyShowsData } from '../../assets/assets'

const Feature = () => {
    const navigate = useNavigate();
  return (
    <div className='h-auto py-12  px-6 md:px-16 lg:px-24 xl:px-46 overflow-hidden bg-[#021933]'>
    <div className='flex items-center justify-between relative text-lg text-gray-300 font-medium'>
      <p className=''>Now Showing</p>
      <button  className='flex gap-2'onClick={()=>navigate('/movie')}>View All <span className='group-hover:translate-x-0.5 transition w-4.5 h-4.5'><ArrowRight/></span></button>
    </div>
     
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12'>
        <MovieCard movie={dummyShowsData[0]}/>
        <MovieCard movie={dummyShowsData[1]}/>
        <MovieCard movie={dummyShowsData[2]}/>
          <MovieCard movie={dummyShowsData[3]}/>
        <MovieCard movie={dummyShowsData[4]}/>
        <MovieCard movie={dummyShowsData[5]}/>
          <MovieCard movie={dummyShowsData[2]}/>
          <MovieCard movie={dummyShowsData[1]}/>
     </div>

    </div>
  )
}

export default Feature
