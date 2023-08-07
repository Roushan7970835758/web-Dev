// import logo from './logo.svg';
import React from 'react'

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success');
      document.title = "TextUtils - Home";
      setTimeout(() => {
        document.title = "TextUtils - Dark Mode";
      }, 1000);
      setTimeout(() => {
        document.title = "TextUtils - Home";
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('light mode has been enabled', 'success')
      document.title = "TextUtils - Home";
      setTimeout(() => {
        document.title = "TextUtils - Light Mode";
      }, 1000);
      setTimeout(() => {
        document.title = "TextUtils - Home";
      }, 1500);
    }
  }


  return (
    <>


      <Router>
      {/* <Navbar/> */}
      {/* <Navbar title= "textUtils" aboutText ="About TextUtils"/> */}
        <Navbar title='textUtils' aboutText ="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
        <Routes>
          <Route  exact path="/about" element={<About/>}/>
          
          
          <Route exact path="/" element ={<TextForm showAlert={showAlert} heading="Enter the text to utilise" mode={mode} />}/>
              

        </Routes>
        </div>

      </Router>
              
    </>
  );
}

export default App;
