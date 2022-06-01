import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

import './Post.css';


function Post(props) {


    const [newForm, setNewForm] = useState({
        userId: '',
        text: '',
        pic: ''
    })

    const handleChange = (e) => {
        setNewForm({ ...newForm, userId: JSON.parse(sessionStorage.signedIn)._id, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.createPosts(newForm)

        setNewForm({
            userId: '',
            text: '',
            pic: ''
        })
    }


    const [newComment, setNewComment] = useState({
        userId: '',
        text: ''
    })

    const handleChangeComment = (e) => {
        setNewComment({ ...newComment, userId: JSON.parse(sessionStorage.signedIn)._id, text: e.target.value})
    }

    const handleSubmitComment = (id) => (e) => {
        e.preventDefault()
        props.createComment(id, newComment)

        setNewComment({
            userId: '',
            text: ''
        })
    }

    
    const getUserById = (id) => {
        var user = props.users.find(user => user._id === id)
        return user
    }


    const loading = () => {
        return <h1>Loading...</h1>
    }
    
    const loaded = () => {
        return props.posts.map(post => ( 
            <div key={post._id} className="post">
                <div className="user-info">
                    <Link to={`/users/${post.userId}`}>
                        <div className="info">
                            <img className="profile-pic" src={getUserById(post.userId).profilePic} alt=""/>
                            <h4 className="name">{getUserById(post.userId).username}</h4>
                        </div>
                    </Link>
                    <p className="date">{new Date(post.createdAt).getHours() + ":" + new Date(post.createdAt).getMinutes() + ", " + new Date(post.createdAt).toDateString()}</p>
                </div>
                <p className="post-text">{post.text}</p>
                <img className="post-pic" src={post.pic} alt=''/>
                <div className="like-body fa-2x">
                    <i className="heart">{post.likes}</i>
                    <i className="comment"></i>
                    <hr />
                </div>
                {post.comments.map((comment => {
                    return(
                        <div className="comments">
                            <Link to={`/users/${comment.userId}`}> 
                                <div className="info">
                                    <img className="profile-pic" src = {getUserById(comment.userId).profilePic} alt=""/>
                                    <h4 className="name">{getUserById(comment.userId).username}</h4>
                                </div>
                            </Link>  
                            <h4>{comment.text}</h4>
                        </div>
                    )
                }))}
                <section>
                    <form>
                        {/* <input
                            type="text"
                            name="userId"
                            placeholder="userId"
                            defaultValue={newComment.userId}
                            onChange={handleChangeComment}
                        /> */}
                        <input
                            type="text"
                            name="text"
                            placeholder="text"
                            defaultValue={newComment.text}
                            onChange={handleChangeComment}
                        />
                        <button type="button" onClick={handleSubmitComment(post._id)}>Post Comment</button>
                    </form>
                </section>
            </div>
        ))
    }

    return (
        <section className="comment-form">
            <form>
                {/* <input
                    type="text"
                    name="userId"
                    placeholder="userId"
                    defaultValue={newForm.userId}
                    onChange={handleChange}
                /> */}
                <input
                    type="text"
                    name="text"
                    placeholder="text"
                    defaultValue={newForm.text}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="pic"
                    placeholder="picture"
                    defaultValue={newForm.pic}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleSubmit}>Post</button>
            </form>
            
            {props.posts ? loaded() : loading()}
        </section>
    )
}

export default Post;