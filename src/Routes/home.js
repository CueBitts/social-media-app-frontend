import React from 'react'
import { useParams } from 'react-router-dom'

function Home(props) {
    console.log(props)
    const { id } = useParams()
    const posts = props.posts
    const post = posts.find(p => p._id === id)
  
    return (
        <div className="post">
          <h1>Show Page</h1>
            <h2>{post.userId}</h2>
            <h2>{post.text}</h2>
            <img src={post.pic}  />
        </div>
    )
  }

export default Home
