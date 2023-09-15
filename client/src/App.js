import './App.css';
// import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
import All from './components/All';
import MernStack from "./components/courses/MernStack"
// import { Signup } from './components/Signup';
import { MeanStack } from './components/courses/MeanStack';
import { Devops } from './components/courses/Devops';
import { DataScience } from './components/courses/DataScience';
import Ongoing from './components/Batches/Ongoing';
import Upcoming from './components/Batches/Upcoming';
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mernstack' element={<MernStack />} />
        <Route path='/meanstack' element={<MeanStack/>} />
        <Route path='/devops' element={<Devops />} />
        <Route path='/datascience' element={<DataScience />} />
        <Route path='/signup' element={<Register/>}/>
        <Route path='/ongoing' element={<Ongoing/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
      </Routes>

    </div>

  );
}

export default App;
