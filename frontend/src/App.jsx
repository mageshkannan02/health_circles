import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Doctor from './pages/doctor/Doctor'
import RxGroup from './pages/rxgroup/RxGroup'
import './index.css';
import RxgroupList from './components/rxgroup_list/RxgroupList';
import AddRxgroups from './components/add_rxgroups/AddRxgroups';
    

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <RxGroup />} />
      <Route path='/profile' element={ <Doctor />} />
      
      
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App