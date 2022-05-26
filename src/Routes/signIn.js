import React from 'react'
import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import '../index.css'


function Signin() {
    const initialState ={
        username:'', 
        password:'',
         }

const [logIn, setLogIn]=useState([]);
const [formState, setFormState]=useState(initialState)

const url = "https://localhost:4000/users"

const getUser = () => {
    fetch(url)
    .then(res=>res.json())
    .then(resp=>setLogIn(resp))
}

    const initialState ={username:'', password:''}
    const [formState, setFormState]=useState(initialState);
    
const handleChange = event =>{
        setFormState({...formState, 
                    [event.target.id]: 
                    event.target.value});
}
const handleSubmit = event =>{
        event.preventDefault();
        setFormState(initialState)
}

useEffect(()=>{
     getUser();
    },[])

    return (
        <div>
            <h2 className='title'>Sign in here</h2>

            <Header />
      {/* formState.username==={logIn.username} && formState.password==={logIn.password}?handleSubmit:: ""  */}
                   
        <form className='form'> 
            
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="text"
                onChange={handleChange}
                value={formState.username} />

                {console.log(formState.username)}
            <label htmlFor="password">Password:</label>
            <input 
                id="password" 
                type="password"
                onChange={handleChange}
                value={formState.password} />
                <br/>
            
             <button type="submit">Login</button>   
             {/* <p>{formState.password===formState.passwordConfirm?"Confirmed" : "Retry"}</p> */}

        </form>
    </div>
  )
}

export default Signin