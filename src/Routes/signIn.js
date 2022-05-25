import React, {useState} from 'react'
import Header from '../Components/Header'
import '../index.css'

function Signin() {
    const initialState ={
        username:'', 
        password:'',
        passwordConfirm:'',
        message:''}

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
    
    return (
        
        
        <div>Sign in here
        <Header />
      
        <form className='form' 
            onSubmit={formState.password===formState.passwordConfirm 
                    ? handleSubmit 
                    : ""}>
            
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
                <br/>
            
    
             <button type="submit">Login</button>   
             <p>{formState.password===formState.passwordConfirm?"Confirmed" : "Retry"}</p>

        </form>
    </div>
  )
}

export default Signin