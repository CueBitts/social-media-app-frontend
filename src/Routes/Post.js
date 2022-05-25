import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.css'


function Home(props) {
    console.log(props)
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

    const loaded = () => {
        return props.posts.map((post) => (
                <div key={post._id} className='post'>
                    <Link to={`/posts/${post._id}`}>
                        <h3>{post.userId}</h3>
                    </Link>
                        <img src={post.pic} />
                        <h3>{post.text}</h3>
                        <h3>{post.createdAt}</h3>
                        <h4>Likes: {post.likes}</h4>
                        { post.comments.map((comment => {
                            return(
                                <div>
                                <h4>{comment.userId}</h4>
                                <h4>{comment.text}</h4>
                                </div>
                            )
                        }))}
                </div>
            )
        )
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

export default Home