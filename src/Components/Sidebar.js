import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <Link to="/all">
                <div>All</div>
        </Link>
        <Link to="/following">
                <div>Following</div>
        </Link>
        <Link to="/news">
                <div>News</div>
        </Link>
        <Link to="/events">
                <div>Events</div>
        </Link>
    </div>
  )
}

export default Sidebar