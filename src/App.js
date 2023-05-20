
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserData from './Components/UserData';
import Coments from './Components/Coments';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<UserData/>}/>
      <Route path='/comments/:id' element={<Coments/>}/>
      
    </Routes>
   
    </div>
  );
}

export default App;
