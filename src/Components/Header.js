import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>

      <div className='userName'>
      <h2>User name here and Pic</h2>
      {/* <h2>User: {JSON.parse(sessionStorage.signedIn).username}</h2> */}
      <Link to='/logout'>Logout</Link>
      </div>

      <h2>Social Media App</h2>

      <div className='headerLinks'>
        <Link to ='/signin'>Sign In</Link>
        <Link to ='/createaccount'>Create an Account</Link>
      </div>

    </div>
  )
}

export default Header