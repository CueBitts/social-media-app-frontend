import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import '../index.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <Link to={`/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>
                <div>Profile</div>
        </Link>
        <Link to="/all">
                <div>Posts</div>
        </Link>
        <Link to="/news">
                <div>News</div>
        </Link>
        <Link to="/events">
                <div>Events</div>
        </Link>
        <Link to="/following">
                <div>Following</div>
        </Link>
    </div>
  )
}

export default Sidebar