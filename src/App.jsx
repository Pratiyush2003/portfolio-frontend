import React from 'react'
import Main from './Portfolio/Main';
import Admin from './Portfolio/Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Portfolio/Navbar';
import Dashboard from './Portfolio/Dashboard';
import MyState from './context/MyState';
import './App.css'

const App = () => {
  return (
    <div className='w-full'>
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
    </div>
  )
}

export default App
