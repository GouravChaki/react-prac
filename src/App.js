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
  Link
} from "react-router-dom";
import Alert from './Components/Alert';


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
    <switch>
    <Route>
      <Navbar title="TextUtils" hometext="Home" abouttext="About" mode={mode} toggleMode={toggleMode}/>
    </Route>
    </switch>
    <Alert value={alert}/>
    <Turkey mode={mode} alert={changealert}/>
    <About/>
    </Router>
    </>
  );
}

export default App;
