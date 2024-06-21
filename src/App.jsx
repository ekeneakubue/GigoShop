import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Menu from './pages/menu/Menu'
import About from './pages/about/About'
import Contacts from './pages/contact/Contacts'
import Cart from './pages/cart/Cart'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = '/' element = { <Home/> } />
        <Route path = '/menu' element = { <Menu /> } />
        <Route path = '/about' element = { <About /> } />
        <Route path = '/contacts' element = { <Contacts /> } />
        <Route path = '/cart' element = { <Cart /> } />
        <Route path = '/login' element = { <Login /> } />
        <Route path = '/signup' element = { <Register /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
