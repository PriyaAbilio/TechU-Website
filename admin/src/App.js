
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Batches from './components/Batches';
import Enquiries from './components/Enquiries';
import Enrolls from './components/Enrolls';
import Users from './components/Users';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      
<Routes>
  <Route path='/batches' element={<Batches />}/>
  <Route path='/enquiries' element={   <Enquiries />}/>
  <Route path='/users' element={<Users />}/>
  <Route path='/enrolls' element={<Enrolls/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
    </div>
  );
}

export default App;
