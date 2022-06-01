import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Createaccnt from './Routes/Createaccnt';
import Signin from './Routes/Signin';
import News from './Routes/News';
import Events from './Routes/Events';

import './App.css';


// function useToken() {


//   const getToken = () => {
//     const tokenString = sessionStorage.getItem('token')
//     const userToken = JSON.parse(tokenString)
//     return userToken?.token
//   }
//   const [token, setToken] = useState(getToken())

//   const saveToken = (userToken) => {
//     sessionStorage.setItem('token', JSON.stringify(userToken))
//     setToken(userToken.token)
//   }

//   console.log(token)

//   return {
//     setToken: saveToken,
//     token
//   }
// }

function App() {


  // const {token, setToken} = useToken()
  // if(!token) {
  //   return <Signin setToken={setToken}/>
  // }
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/events' element={<Events/>}/>
      </Routes>  
    </div>
  )
}

export default App;