import {useState, useEffect} from 'react';
import {BrowserRouter as Router, BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Components/Header';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import Createaccnt from './Routes/Createacct';
import Signin from './Routes/Signin';
import News from './Routes/News';
import Events from './Routes/Events';

import './App.css';

function App() {


  // if(!sessionStorage.signedIn) {
  //   return (
  //     <div className="App">
  //       <Header/>
  //       <Signin/>
  //     </div>
  //   )
  // }
  
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <Routes>
          <Route path='/social-media-app-frontend/' element={<Main/>}/>
          <Route path='/social-media-app-frontend/signin' element={<Signin/>}/>
          <Route path='/social-media-app-frontend/news' element={<News/>}/>
          <Route path='/social-media-app-frontend/events' element={<Events/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;