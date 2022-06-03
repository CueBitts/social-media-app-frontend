import React from 'react'
import '../index.css'
import{useNavigate} from 'react-router-dom'


function Logout() {

    const tokenString = sessionStorage.getItem('signedIn');
    const userToken = JSON.parse(tokenString);
    console.log ("7", userToken.username)
    const navigate=useNavigate()
       
  return (
      
      <div>

        {sessionStorage.setItem('signedIn','')}
        {navigate('/signin')}
          <h1 >test</h1>
        {console.log('hi')}
        {console.log(userToken.username)}
       <h1>{userToken.username}</h1>
       
    </div>
  )
}

export default Logout