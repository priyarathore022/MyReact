import React from 'react';
import nez from './img/home.jpg';
import Nav from './Nav';

export default function Home() {
  return (
   <>
   <Nav/>
   <h1>Its Home</h1>
   <img src={nez}></img>
   </>
  )
}
