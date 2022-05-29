import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import { useNavigate } from 'react-router';
import '../index.css'


function Signin() {

    const navigate = useNavigate()
    const initialState ={
        username:'', 
        password:'',
         }

    const [logIn, setLogIn]=useState('');
    const [formState, setFormState]=useState(initialState)
    const [msg, setMsg] = useState('')
    
    const handleChange = event =>{
        setFormState({...formState, 
            [event.target.id]: 
            event.target.value});
        }
        
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const user= await fetch('http://localhost:4000/users/signin',
            {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
        });
        const data= await user.json()
        if(data.error){
            setMsg(data.error)
        } else if(data.message){
            setMsg(data.message)
            navigate('/posts')
        }
        
        console.log('user:', user.json())
        console.log(data)
    };

        return (
            <div>
            <h2 className='title'>Sign in here</h2>
 
            
        <form className='form' onSubmit={handleSubmit}> 
            
            <label htmlFor="username">Username: </label>
            <input 
                id="username" 
                type="username"
                onChange={handleChange}
                value={formState.username} 
                />
            
                {console.log(formState.username)}

            <label htmlFor="password">Password:</label>
            <input 
                id="password" 
                type="password"
                onChange={handleChange}
                value={formState.password} 
                />
                <br/>
                {console.log(formState.password)}
            
             <button type="submit">Login</button>   
             <p>{msg}</p>

        </form>
    </div>
  )
}

export default Signin