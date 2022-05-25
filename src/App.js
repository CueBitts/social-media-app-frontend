import logo from './logo.svg';
import './App.css';
import Signin from './Routes/Signin';
import Createaccnt from './Routes/Createaccnt';
import{Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <div>
      <Routes>
          <Route path='/createaccount' element={<Createaccnt />} />
          <Route path='/signin' element={<Signin />} />
          
      </Routes>
    </div>  
    </div>
  );
}

export default App;
