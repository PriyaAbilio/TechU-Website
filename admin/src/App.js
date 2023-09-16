
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Enquiries from './components/Enquiries';
import Enrolls from './components/Enrolls';
import Users from './components/Users';
// import Login from './components/Login';
import AddBatch from './components/Batches/AddBatch';

import AllBatches from './components/AllBatches';
import Enroll from './components/Enroll';
import Signin from './components/Signin';
import Home from './Home';



function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/addbatch' element={  <AddBatch/>}/>
  <Route path='/batches' element={<AllBatches />}/>
  <Route path='/enquiries' element={   <Enquiries />}/>
  <Route path='/users' element={<Users />}/>
  <Route path='/enrolls' element={<Enroll/>}/>
  <Route path='/login' element={<Signin/>}/>

</Routes>
    </div>
  );
}

export default App;
