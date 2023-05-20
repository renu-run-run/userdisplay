
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserData from './Components/UserData';
import Coments from './Components/Coments';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<UserData/>}/>
      <Route path='/comemts/:id' element={<Coments/>}/>
      <Route path='*' element={<UserData/>}/>
    </Routes>
   <Coments/>
    </div>
  );
}

export default App;
