import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Post from "../Routes/Post";
import Home from "../Routes/Home"


function Main(props) {
    const [posts, setPosts] = useState(null);

    const URL = "http://localhost:4000/posts/";

    const getPosts = () => {
        fetch(URL)
        .then(response => response.json())
        .then((result) => setPosts(result))
    }

    const createPosts = async (posts) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(posts),
        });
        getPosts();
    };

    useEffect(() => getPosts(), []);

    return (
        <main>
            <Routes>
                <Route 
                    path='/posts' 
                    element={<Post
                        posts={posts} 
                        createPosts={createPosts} 
                    />} 
                />
                <Route
                    path="/posts/:id"
                    element={
                      
                        <Home
                        posts={posts}
                        />
                    }
                />
            </Routes>
        </main>
    );
}

export default Main;