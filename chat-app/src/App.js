import './App.css';
import {Routes, Route} from 'react-router-dom'
import {LoginPage} from './Components/LoginPage';
import {SignUp} from './Components/SignUp';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <h1> ChatApp </h1>
      <Routes>  
        <Route path = '/' element = {<LoginPage />}/>
        <Route path = 'signup' element = {<SignUp />}/>
        <Route path = 'home' element = {<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
