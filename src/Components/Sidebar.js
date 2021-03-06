import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import '../index.css'

function Sidebar() {
                
        if(!sessionStorage.signedIn) {
                return (
                        <div className="sidebar">
                        {/* <Link to={`/social-media-app-frontend/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>
                                <div>Profile</div>
                        </Link> */}
                        <Link to="/social-media-app-frontend/all">
                                <div>Posts</div>
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
                        <Link to="/following">
                                <div>Following</div>
                        </Link>
                    </div>
                  )
        }
  
return (
        <div className="sidebar">
        <Link to={`/social-media-app-frontend/users/${JSON.parse(sessionStorage.signedIn)?._id}`}>
                <div>Profile</div>
        </Link>
        <Link to="/social-media-app-frontend/all">
                <div>Posts</div>
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
        <Link to="/following">
                <div>Following</div>
        </Link>
    </div>
  )
}

export default Sidebar