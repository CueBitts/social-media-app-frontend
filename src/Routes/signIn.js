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

// const validated = event =>{
//     if (formState.password === formState.passwordConfirm){
//         formState.valid=true
//     }
// }

  return (

    
    <div>Signin  here
      
        <form onSubmit={formState.password===formState.passwordConfrim?handleSubmit:''}>

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

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input 
                id="password" 
                type="password"
                onChange={handleChange}
                value={formState.confirmPassword} />


             <p className={formState.valid ===true?'valid':'invalid'}
                onChange={formState.password=== formState.passwordConfirm?formState.valid:''}>{formState.valid===true?"Passwords Match":"Passwords Do Not Match"}</p> 
                 
             <button type="submit">Sign Up</button> 
        </form>
    </div>
  )
}

export default Signin