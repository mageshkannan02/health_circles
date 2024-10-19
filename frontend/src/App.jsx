import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Doctor from './pages/doctor/Doctor'
import RxGroup from './pages/rxgroup/RxGroup'
import './index.css';
import RxGroupInfo from './components/rx_group_info/RxGroupInfo';
       

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