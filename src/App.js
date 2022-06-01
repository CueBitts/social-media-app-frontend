
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Createaccnt from './Routes/Createaccnt';
import Signin from './Routes/Signin'
import{Routes, Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import News from './Routes/News';
import Events from './Routes/Events';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    <div>
      <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/news' element={<News />} />
          <Route path='/events' element={<Events />} />
          
      </Routes>
    </div>  
    </div>
  );
}

export default App;
