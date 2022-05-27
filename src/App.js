import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Header from './Components/Header';
import Posts from './Components/Posts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Posts/>
    </div>
  );
}

export default App;
