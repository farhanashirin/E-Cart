
import Header from './Components/Header' 
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wishlist from './pages/Wishlist'


import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/wishlist' element={<Wishlist/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/view/:id' element={<View/>}/>
     {/* requseting an invalid route move to home */}
     <Route path='/*' element={<Navigate to='/' />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
