import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


function Header() {

  if(!sessionStorage.signedIn) {
  
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
  
  return (
    <div className='header'>

      <div className='userName'>
      <img className="profile-pic" src={JSON.parse(sessionStorage.signedIn)?.profilePic} alt=''/>
      <h3 className="profile-name">{JSON.parse(sessionStorage.signedIn)?.username}</h3>
      </div>
      <Link to='/social-media-app-frontend/'><h2>SpaceBar</h2></Link>
      <div className="headerLinks">
        <Link to='/social-media-app-frontend/signin'>Sign In - </Link>
        <Link to='/social-media-app-frontend/createaccount'>Create an Account</Link>
    
      </div>
      {/* <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>Profile - </Link> */}
    </div>
  )
  
}

export default Header;