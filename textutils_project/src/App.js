
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [colorPicker, setcolorPicker] = useState("");
  const toggleMode = ()=>{
    removeBodyClass();
    if(mode === 'light'){
      setmode("dark");
      setcolorPicker('dark');
      document.body.style.backgroundColor = 'rgb(3 4 20)';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils Project - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is an amazing website";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else{
      setmode('light');
      setcolorPicker('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils Project";
    }
  }
  const toggleColor = (cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    setcolorPicker(cls);
  }
  const removeBodyClass = ()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }
  const showAlert = (message,type)=>{
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor}></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} colorPicker={colorPicker}></TextForm>
            </Route>
            <Route exact path="/about">
              <About mode={mode}></About>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
