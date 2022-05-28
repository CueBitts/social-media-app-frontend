import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">

      <Link to="/posts">
              <div>Home</div>
      </Link>
      <Link to="/news">
              <div>News</div>
      </Link>
      <Link to="/events">
              <div>Events</div>
      </Link>
      <Link to="/other">
              <div>Other</div>
      </Link>

    </div>
  )
}

export default Sidebar