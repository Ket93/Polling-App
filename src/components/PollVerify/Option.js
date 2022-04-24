import React from 'react'
import { useState } from 'react'
import "./PollVerify.css";

const Option = ( { id, text, onClick } ) => {
  return (
    <div className='option' onClick={() => onClick(id)}>
        <h1>{text}</h1>   
    </div>
  )
}

export default Option