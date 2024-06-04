import React from 'react'
import Main from './Portfolio/Main';
import Admin from './Portfolio/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Portfolio/Navbar';
import Dashboard from './Portfolio/Dashboard';
import MyState from './context/MyState';

const App = () => {
  return (
    <>
    <MyState>
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}></Route>
        <Route path='admin' element={<Admin/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    </MyState>
    </>
  )
}

export default App