import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Turkey from './Components/Turkey';
import React, { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Alert from './Components/Alert';
import Example from './Components/Example';


function App() {
  const [mode,setMode]=useState('light')
  const toggleMode =()=>{
      if(mode==='dark'){
        setMode('light')
        let a =document.body
        a.style.backgroundColor="white"
        givealert(1)
      }
      else{
        setMode('dark')
        let a =document.body
        a.style.backgroundColor="#0f5044e0"
        givealert(0)
      }
      
  }
  const [alert,setalert]=useState({
    result: null,
    color: null
  });
  const givealert=(a)=>{
    if(a){changealert('Dark Mode Disabled','warning')}
    else{changealert('Dark Mode Enabled','success')}
    
  }
  const changealert=(msg,type)=>{
      setalert({
        result: msg,
        color: type
      })
      setTimeout(()=>{
        setalert({
          result: null,
          color: null
        })},2000)
    }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" hometext="Home" abouttext="About" mode={mode} toggleMode={toggleMode}/>
    <Alert value={alert}/>
    <Routes>
    <Route path="/" element={<Turkey mode={mode} alert={changealert}/>}></Route>
    <Route path="/example" element={<Example/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
