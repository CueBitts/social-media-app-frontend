import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Post() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('/posts')
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
                                src={user.profilePic}
                                alt='profilePic'
                            />
                            <p className='postUser'>{user.username}</p>
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
                                                <Link to={`/${user.username}`} key={user.username}>{user.username}</Link>
                                                <p className='commentText'>comment.text</p>
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

export default Post;