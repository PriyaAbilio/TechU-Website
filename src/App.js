
import './App.css';

import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
import All from './components/All';
import Preview from "./components/Preview"
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/register' element={<Login />} />
        <Route path='/course' element={<Preview />} />
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

    </div>

  );
}

export default App;
