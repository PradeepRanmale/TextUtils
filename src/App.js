

import './App.css';
import About from './components/About';       //we are importing About.js component here
import Navbar from './components/Navbar';     //we are importing Navbar.js component here
import TextForm from './components/TextForm'; //we are importing TextForm.js component here
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,                    //all react components should be in this "BrowserRouter" tag
  Routes,                           //components which should be not to relaod are in this  "Routes" folder
  Route,                            //in this tag you shold place and single component and its path
  Link,                            //replace all "a" and hrf tags with "Link" and "to"
} from "react-router-dom";         //This package will help you to load othor component on dom without reloading the page

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#042743';
      showAlert('Dark mode has been enabled', 'success')
      document.title = "TextUtils - Dark Mode";      //It will show titile in title bar like this when dark mode is on , its part of SEO
      setInterval(() => {
        document.title = 'TextUtils is Amazing Mode'
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils App Now'
      }, 1500);
    }
    else {
      setMode('light')
      document.body.style.background = 'white';
      showAlert('light mode has been enabled', 'success')
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
        <Route  path="/about" element={<About/>} />
        <Route  path="/" element={<TextForm showAlert={showAlert} heading='Enter the text' mode={mode} />} />
      </Routes>
      </div>
      </BrowserRouter>
  
        

    </>
  );
}

export default App;
