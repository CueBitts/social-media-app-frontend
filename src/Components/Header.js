import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      {/* <h2>User: {JSON.parse(sessionStorage.signedIn).username}</h2> */}
      <Link to ='/signin'>Sign In</Link>
      <Link to='/'>Social Media App</Link>
      <Link to ='/createaccount'>Create an Account</Link>
    </div>
  )
}

export default Header