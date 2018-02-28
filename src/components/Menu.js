import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu () {
  const style = {
    marginRight: '10px'
  }

  return (
    <div className='menu'>
      <Link to='/' style={style}>Home</Link>
      <Link to='/add' style={style}>Add</Link>
    </div>
  )
}
