import React, { Component } from 'react'
import loading from './monkeyLoading.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
      <img src={loading} alt="loading" />
    </div>
  )
}


export default Spinner
