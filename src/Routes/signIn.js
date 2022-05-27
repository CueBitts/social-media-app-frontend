import React, {useEffect, useState} from 'react'
import '../index.css'


function Signin() {
    const initialState ={
        username:'', 
        password:'',
         }

    const [logIn, setLogIn]=useState('');
    const [formState, setFormState]=useState(initialState)
    const [namePw, setNamePw] = useState([])

    const url = "http://localhost:4000/users/"

    const getUser = () => {
        fetch(url)
        .then(res=>res.json())
        .then((data)=>setLogIn(data))
    }
    console.log('login: ',logIn)

    
    const handleChange = event =>{
            setFormState({...formState, 
                        [event.target.id]: 
                        event.target.value});
    }
    const handleSubmit = event =>{
            event.preventDefault();
            setFormState(initialState)
    };

useEffect(()=>getUser(),[])

    // const userChk = () =>{
    //     return  logIn.map((data)=>{
          
    //     formState.username!==data.username?"Please try again":''
    //      })}

        //  {logIn.map(data)=>{
        //     let pwCheck=data.password 
        // }}
        // {formState.password!==data.password?"Please try again":''}

        return (
            <div>
            <h2 className='title'>Sign in here</h2>
                   
            {/* formState.username==={logIn.username} && formState.password==={logIn.password}?handleSubmit:: ""  */}
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