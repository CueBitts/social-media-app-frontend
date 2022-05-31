import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.css'


function Post(props) {
    console.log(props.posts[3].comments)
    // const { id } = useParams()
    // const comments = props.posts.comments[0]
    // const comment = comments.find(comment => comment._id === id)

    const [newForm, setNewForm] = useState({
            userId: "",
            text: "",
            pic: "",
    });

    const [newComment, setNewComment] = useState({
        comments: [
            {
                userId: "",
                text: ""
            }
        ]
    })

    console.log(newComment)

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleChangeComment = (event) => {
        setNewComment({ ...newComment, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPosts(newForm);
        setNewForm({
            userId: "",
            text: "",
            pic: "",
        });
    };

    const handleSubmitComments = (event) => {
        event.preventDefault();
        props.updatePosts(newComment);
    };

    function getUserById(id) {
        var user = props.users.find(user => user._id === id)
        // console.log(user)
        return user
    }

    const loaded = () => {
        return props.posts.map((post) => ( 
            <div key={post._id} className='post'>
                <div className="user-info">
                <Link to={`/users/${post.userId}`}>
                    <div className="info">
                    <img className="profile-pic" src={getUserById(post.userId).profilePic} alt=''/>
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
                { post.comments.map((comment => {
                    return(
                        <div className="comments">
                        <Link to={`/users/${post.userId}`}> 
                            <div className="info"><img className="profile-pic" src = {getUserById(comment.userId).profilePic} alt=''/><h4 className="name">{getUserById(comment.userId).username}</h4>
                        </div>
                            </Link>  
                            <h4>{comment.text}</h4>
                        </div>
                        )
                    }))}
                    <section>


                    <form>
                        <input
                            type="text"
                            value={newComment.comments.userId}
                            name="userId"
                            placeholder="userId"
                            onChange={handleChangeComment}
                        />
                        <input
                            type="text"
                            value={newComment.comments.text}
                            name="text"
                            placeholder="comment"
                            onChange={handleChangeComment}
                        />
                        <input onSubmit={handleSubmitComments} type="submit" value="Create Comment" ></input>
                    </form>
                    </section>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return (
        <section className="comment-form">
            <form>
                <input
                    type="text"
                    value={newForm.userId}
                    name="userId"
                    placeholder="userId"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.text}
                    name="text"
                    placeholder="text"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.pic}
                    name="pic"
                    placeholder="picture"
                    onChange={handleChange}
                />
                <input onSubmit={handleSubmit} type="submit" value="Create Post" />
            </form>
            {props.posts ? loaded() : loading()}
        </section>
    )
}

export default Post