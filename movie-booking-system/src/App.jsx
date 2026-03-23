import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Seatlayout from './pages/Seatlayout'
import Favourite from './pages/Favourite'
import MovieDetails from './pages/MovieDetails'
import Booking from './pages/Booking'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const isAdminRoutes = useLocation().pathname.startsWith('/admin')
  
  return (
   <>
    <Toaster/>
     {(!isAdminRoutes) && <Navbar/>}
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/movie-details/:id' element={<MovieDetails/>}/>
       <Route path='/movie' element={<Movie/>}/>
       <Route path='/seats/:id/:date' element={<Seatlayout/>}/>
       <Route path='/booking' element={<Booking/>}/>
       <Route path='/favourite' elemenent= {<Favourite/>}/>
     </Routes>
    {(!isAdminRoutes)&& <Footer/>}
   </>
  )
}

export default App
