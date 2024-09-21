import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'
import  { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged In");
        navigate ('/netflix');
      }
      else{
        console.log("Logged Out");
        navigate('/netflix/login');
      }
    })
  },[])

  return (


    <div >
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/netflix' element={<Home />} />
        <Route path='/netflix/login' element={<Login />} />
        <Route path='/netflix/player/:id' element={<Player />} />
        
      </Routes>
    </div>
  )
}

export default App
