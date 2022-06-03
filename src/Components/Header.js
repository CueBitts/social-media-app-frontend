import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


function Header() {

  if(sessionStorage.signedIn) {
  
  return (
    <div className='header'>

      <div className='userName'>
      <img className="profile-pic" src={JSON.parse(sessionStorage.signedIn)?.profilePic}/>
      <h3 className="profile-name">{JSON.parse(sessionStorage.signedIn)?.username}</h3>
      </div>
      <h2>SpaceBar</h2>
      <div className="headerLinks">
        <Link to='/signin'>Sign In </Link>
        <Link to='/createaccount'>Create an Account</Link>
      </div>
    </div>
  )
} else {
  
 
  return (
    <div className='header'>

    <div className='userName'>
    {/* <img className="profile-pic" src={JSON.parse(sessionStorage.signedIn)?.profilePic}/>
    <h2>{JSON.parse(sessionStorage.signedIn)?.username}</h2> */}
    </div>
    <Link to='/'>SpaceBar</Link>
    {/* <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>Profile </Link> */}
    <Link to='/signin'>Sign In - </Link>
    <Link to='/createaccount'>Create an Account</Link>
  </div>
  )
  }
}

export default Header;