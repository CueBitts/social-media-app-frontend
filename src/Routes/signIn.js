import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import '../index.css'


function Signin() {
    const initialState ={
        username:'', 
        password:'',
         }

    const [logIn, setLogIn]=useState('');
    const [formState, setFormState]=useState(initialState)
    const [namePw, setNamePw] = useState([])

    // const url = "http://localhost:4000/users/"

    // const getUser = () => {
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then((data)=>setLogIn(data))
    // }
    // console.log('login: ',logIn)


    
    
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
        console.log(user)
        console.log(formState)
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
             {/* <p>{formState.password===formState.passwordConfirm?"Confirmed" : "Retry"}</p> */}

        </form>
    </div>
  )
}

export default Signin