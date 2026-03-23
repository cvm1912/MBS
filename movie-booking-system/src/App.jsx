import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Seatlayout from './pages/Seatlayout'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'

const App = () => {
  return (
   <>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/movie-details' element={<MovieDetails/>}/>
       <Route path='/movie' element={<Movie/>}/>
       <Route path='/seats' element={<Seatlayout/>}/>
       <Route path='/favourite' elemenent= {<Favourite/>}/>
    </Routes>
    <Footer/>
   </>
  )
}

export default App
