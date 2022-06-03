import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <Link to="/social-media-app-frontend/all">
                <div>All</div>
        </Link>
        <Link to="/social-media-app-frontend/following">
                <div>Following</div>
        </Link>
        <Link to="/social-media-app-frontend/news">
                <div>News</div>
        </Link>
        <Link to="/social-media-app-frontend/events">
                <div>Events</div>
        </Link>
    </div>
  )
}

export default Sidebar