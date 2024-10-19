import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Login from './Login/Login';
import RegisterForm from './Register/Register';
import Create from './Create/Create';
import Update from './Update/Update';
import Read from './Read/Read';
import Home from './Home/Home';
import Footer from './Footer/Footer';



const AppRouter = () => (
 
  <Router>
    <Header />
    <Routes>
      <Route path='home' element={<Home/>} />
      <Route path='register' element={<RegisterForm/>} />
      <Route path='login' element={<Login/>} />
      <Route path='create' element={<Create/>} />
      <Route path='read' element={<Read/>} />
      <Route path='update/:id' element={<Update/>} />

      <Route path='/' element={<Home/>} />
    
    </Routes>
    <Footer/>

  </Router>

)
  

export default AppRouter;
