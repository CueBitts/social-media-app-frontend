import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header'
import '../index.css'

function Createaccnt() {
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
    <div>Create Account
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
            
            <label 
            htmlFor="passwordConfirm">Confirm password: </label>
            <input
                type="password"
                id="passwordConfirm"
                onChange={handleChange}
                value={formState.passwordConfirm}
                />

             <button type="submit">Create Account</button>   
             <p>{formState.password===formState.passwordConfirm?"Confirmed" : "Retry"}</p>

            <div>
              <p>Already have account?</p><Link to ='/signin'> Sign In </Link>

            </div>
            </form>
             

    </div>
  )
}

export default Createaccnt