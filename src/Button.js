import React, { useState } from 'react'

export default function Counter() {
    const [num,setNum] =useState(1);
    function add(){
       setNum(num+1)
    }
    function minus(){
        setNum(num-1)
    }
    function mult(){
        setNum(num*2)
    }
    function div(){
        setNum(num/2)
    }
  return (
    <>
    <div>{num}</div>
    <button onClick={add}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={mult}>*</button>
    <button onClick={div}>/</button>
    </>
  )
}
