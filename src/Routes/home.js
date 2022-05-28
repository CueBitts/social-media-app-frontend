import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

function Home(props) {
    console.log(props)
    const { id } = useParams()
    const users = props.users
    const user = users.find(u => u._id === id)

    const [formState, setFormState]=useState(user);
    
    const handleChange = event =>{
            setFormState({...formState,[event.target.id]:event.target.value});
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        props.updated(formState, id)
    }
  
    return (
        <div className="post">
          <h1>Show Page</h1>
            <h2>{user.username}</h2>
            <img class="profile-pic" src={user.profilePic}  />

            <h2>{user.username}</h2>

      {/* update user stuff added here */}

        <form className='form' onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username: </label>
            <input 
                type="text"
                value={formState.username} 
                name='username'
                
                onChange={handleChange}
                />
                <br/>

            <label htmlFor="profilePic">Profile Picture Link: </label>
            <input 
                type="text"
                value={formState.profilePic} 
                name='profilePic'
                placeholder="profile picture" 
                onChange={handleChange}
                />

            <label htmlFor="password">Password:</label>
            <input 
                type="password"
                value={formState.password} 
                name="password" 
                placeholder='password'
                onChange={handleChange}
                />
                <br/>
            
             <input type="submit" value='Update Person'/> 

        </form>

        {/* update end */}

        </div>
    )
  }

export default Home
