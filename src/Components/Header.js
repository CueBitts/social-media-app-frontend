import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {

  return (
    <div>
        <Link to="/posts">
            <div className="header">Social Media App</div>
        </Link>
        
    </div>
  )
}

export default Header