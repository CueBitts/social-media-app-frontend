import React from 'react'
import { useParams } from 'react-router-dom'

function Home(props) {
    console.log(props)
    const { id } = useParams()
    const users = props.users
    const user = users.find(u => u._id === id)
  
    return (
        <div className="post">
          <h1>Show Page</h1>
            <h2>{user.username}</h2>
            <img class="profile-pic" src={user.profilePic}  />
        </div>
    )
  }

export default Home
