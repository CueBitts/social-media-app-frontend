import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const URL = 'http://localhost:4000'

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(`${URL}/users`)
            .then(res => res.json())
            .then(json => {
                setUsers(json)
            })
    }, [])
}

function getUserById(users, userId) {
    users.forEach(user => {
        if(userId = user)
    })
}

function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`${URL}/posts`)
            .then(res => res.json())
            .then(json => {
                setPosts(json)
            })
            .catch(console.error)
    }, [])

    return(
        <section className='postContainer'>    
            {posts.map(post => {
                return(
                    <div className='post'>
                        <span className='postHeader'>
                            <img className='profilePic'
                                src=''
                                alt='profilePic'
                            />
                            <p className='postUser'>{post.userId}</p>
                            <p className='postTime'>Posted
                            {/* need function to figure this out */}
                            ago</p>
                        </span>
                        <span className='postBody'>
                            <p className='postText'>{post.text}</p>
                            <img className='postPic'
                                src={post.pic}
                                alt='postPic'
                            />
                        </span>
                        <span className='postFooter'>
                            <div className='commentsDrop'>
                                <button className='commentsBtn'>Comments</button>
                                <div className='comments'>
                                    {post.comments.map(comment => {
                                        return(
                                            <div className='comment'>
                                                <Link to={`/`} key={''}></Link>
                                                <p className='commentText'>{comment.text}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </span>
                    </div>
                )
            })}
        </section>
    )
}

export default Posts;