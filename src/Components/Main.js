import {useEffect, useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../Routes/Home";
import Post from "../Routes/Post";
import User from "../Routes/User";
import Createaccnt from "../Routes/Createaccnt";
import Sidebar from "./Sidebar";

import News from "../Routes/News";


function Main() {
    
    
    const postURL = 'http://localhost:4000/posts/'
    const [posts, setPosts] = useState(null)

    const getPosts = () => {
        fetch(postURL)
        .then(response => response.json())
        .then(result => setPosts(result.reverse()))
    }

    const createPosts = async (posts) => {
        await fetch(postURL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
		    body: JSON.stringify(posts)
        })
        getPosts()
    }

    const updatePosts = async (posts, id) => {
        await fetch(`${postURL}${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        getPosts()
    }

    const createComment = async (id, comment) => {
        await fetch(`${postURL}new-comment/${id}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        getPosts()
    }

    useEffect(() => getPosts(), [])
    
    
    const userURL = 'http://localhost:4000/users/'
    const [users, setUsers] = useState(null)

    const getUsers = () => {
        fetch(userURL)
        .then(response => response.json())
        .then(result => setUsers(result))
    }
    
    const createUser = async (users) => {
        await fetch (userURL, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        
        getUsers()
    }

    const updated = async (used, id) => {
        await fetch (`${userURL}${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(used)
        })
        getUsers()
    }

    const deleteUser = async (id) => {
        await fetch (`${userURL}${id}`, {
            method: 'delete'
        })
        getUsers()
    }

    useEffect(() => getUsers(), [])
    

    return (
        <main>
            <Sidebar />
            <Routes>
                <Route 
                    path='/posts' 
                    element={<Post
                        posts={posts} 
                        users={users}
                        createPosts={createPosts}
                        updatePosts={updatePosts}
                        createComment={createComment} 
                    />} 
                />
                <Route 
                    path='/users' 
                    element={<User
                        users={users} 
                    />} 
                />
                <Route
                    path='/users/:id'
                    element={<Home
                        users={users}
                        updated={updated} 
                        deleteUser={deleteUser}
                    />}
                /> 
                <Route 
                    path='/createaccount'
                    element={<Createaccnt 
                        users={users}
                        createUser={createUser}
                    />}
                />
            </Routes>
        </main>
    );
}

export default Main;