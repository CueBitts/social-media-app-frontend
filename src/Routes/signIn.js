import React from 'react'
import Header from '../Components/Header'

function Signin() {

    <Header />
    const initialState ={username:'', password:''}
    const [formState, setFormState]=useState(initialState);
    
const handleChange = event =>{
    setFormState({...formState, [event.target.id]: event.target.value});
}
const handleSubmit = event =>{
    event.preventDefault();
    setFormState(initialState)
    
}

  return (

    
    <div>Signin  here
      
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="text"
                onChange={handleChange}
                value={formState.username} />
            <label htmlFor="password">Password:</label>
            <input 
                id="password" 
                type="password"
                onChange={handleChange}
                value={formState.password} />

             <button type="submit">Login</button>   
        </form>
    </div>
  )
}

export default Signin