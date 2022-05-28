import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.css'


function Post(props) {
    const [newForm, setNewForm] = useState({
            userId: "",
            text: "",
            pic: "",
            comments: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPost(newForm);
        setNewForm({
            userId: "",
            text: "",
            pic: "",
            comments: "",
        });
    };

    function getUserById(id) {
        var user = props.users.find(user => user._id === id)
        console.log(user)
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
                    <form>
                        <input className="comment-input" placeholder="Comment"></input>
                        <i className="send fa-2x"></i>
                    </form>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
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
                    placeholder="pic"
                    onChange={handleChange}
                />
                  <input
                    type="text"
                    value={newForm.comment}
                    name="comment"
                    placeholder="comment"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Post" />
            </form>
            {props.posts ? loaded() : loading()}
        </section>
    )
}

export default Post