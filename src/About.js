import React from 'react'
import nez from './img/images.jpg';
import Nav from './Nav';

export default function About() {
  return (
   <>
   <Nav/>
   <h1>All about</h1>
   <img src={nez} ></img> 
   </>
  )
}
