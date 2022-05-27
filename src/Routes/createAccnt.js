<<<<<<< HEAD
=======

>>>>>>> dev
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/Header'
import '../index.css'

function Createaccnt(props) {
        const initialState ={
              username:'',
              profilePic:'', 
              password:'',
             }

      const [formState, setFormState]=useState(initialState);

      const handleChange = event =>{
              setFormState({...formState,[event.target.id]:event.target.value});
      }
      const handleSubmit = event =>{
              event.preventDefault();
              props.createUser(formState)
              setFormState(initialState)
      }

  return (
   
    <div>Create Account
            <Header />
        <form className='form' onSubmit={handleSubmit}>
            
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="text"
                value={formState.username} 
                onChange={handleChange}
                />
                <br/>

            <label htmlFor="profilePic">Profile Picture Link: </label>
            <input 
                id="profilePic" 
                type="text"
                value={formState.profilePic} 
                onChange={handleChange}
                />

            <label htmlFor="password">Password:</label>
            <input 
                id="password" 
                type="password"
                value={formState.password} 
                onChange={handleChange}
                />
                <br/>
            
             <button type="submit">Create Account</button>   

            <div>
              <p>Already have account?<Link to ='/signin'> Sign In </Link></p>
            </div>

        </form>
             
    </div>
  )
}

export default Createaccnt


//adding password confirmation
// onSubmit={formState.password===formState.passwordConfirm? handleSubmit: ""
{/* <label 
htmlFor="passwordConfirm">Confirm password: </label>
<input
type="password"
id="passwordConfirm"
onChange={handleChange}
value={formState.passwordConfirm}
/> */}
{/* <p>{formState.password===formState.passwordConfirm?"Confirmed" : "Retry"}</p> */}