import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Propsample from './Propsample';
import MyApi from './Myapi';
import Counter from './Button';

export default function Myrouts() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/ecom' element={<Propsample/>}/>
    <Route path='/api' element={<MyApi/>}/>
    <Route path='/button' element={<Counter/>}/>
   </Routes>
   </BrowserRouter>
  )
}
