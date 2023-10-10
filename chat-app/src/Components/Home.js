import { useNavigate } from 'react-router-dom'
import '../App.css';

import Chat from '../Components/Chat.js';



export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
      navigate('/');
  }
  return (
    <div>
        <header> 
        <button className = 'btn' type='button' onClick={handleLogout}> Logout </button> 
        </header> <br />
        
              <Chat />
    </div>
  )
}
