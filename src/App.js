import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Createaccnt from './Routes/Createacct';
import Signin from './Routes/Signin';
import News from './Routes/News';
import Events from './Routes/Events';

import './App.css';

function App() {


  if(!sessionStorage.signedIn) {
    return (
      <div className="app">
        <Header/>
        <Signin/>
      </div>
    )
  }
  
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