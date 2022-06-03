import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header'>

      <div className='userName'>
      <h2>User name here and Pic</h2>
      {/* <h2>User: {JSON.parse(sessionStorage.signedIn).username}</h2> */}
      </div>
      <Link to='/'>Social Media App - </Link>
      {/* <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>Profile - </Link> */}
      <Link to='/signin'>Sign In - </Link>
      <Link to='/createaccount'>Create an Account</Link>
    </div>
  )
}

export default Header;