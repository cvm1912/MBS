import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie}) => {
    const navigate = useNavigate()
  return (
    <>
    <div className='flex flex-col justify-between bg-gray-800 p-3 rounded-2xl hover:translate-y-1 '>
       <img src={movie.poster_path} onClick={()=>navigate(`/movie-details/${movie.id}`)} className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'/>
       <p className='text-2xl py-2 font-semibold truncate'>{movie.title}</p>
       <p className='text-gray-400'>{new Date(movie.release_date).getFullYear()} | {movie.genres.slice(0,2).map((genre) => genre.name).join(', ')} - {movie.runtime}</p>
       
     <div className='flex justify-between items-center text-gray-300 my-2'>
      <button onClick={()=>navigate(`/theater/${movie.id}`)} className='p-2 px-4 bg-red-400 font-semibold rounded-full'>Buy ticket</button>
      <p>{movie.vote_average.toFixed(2)}</p>
     </div>

    </div>

   


    </>
    

  )
}

export default MovieCard