import React, {useState} from 'react'

// import Header from '../Components/Header'

function Signin() {

    // <Header />
    const initialState ={
        username:'', 
        password:'',
        passwordConfirm:'',
        valid:false}

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
      
        <form onSubmit={formState.password===formState.passwordConfirm?handleSubmit:''}>

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

            <label htmlFor="passwordConfirm">Confirm Password:</label>
            <input 
                id="passwordConfirm" 
                type="password"
                onChange={handleChange}
                value={formState.passwordConfirm} />


        <p className={formState.valid ===true?'valid':'invalid'}
            onChange={formState.password=== formState.passwordConfirm?!formState.valid:''}  
            >
                {formState.valid===true?"Passwords Match":"Passwords Do Not Match"}</p> 

             <button type="submit">Sign Up</button> 
        </form>
    </div>
  )
}

export default Signin
