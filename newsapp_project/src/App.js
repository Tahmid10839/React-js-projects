
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import UsaNews from './components/UsaNews';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>{

  const apiKey = process.env.REACT_APP_NEWS_API;
  
  const [progress, setProgress] = useState(0);
    return (
      <>
      <Router>
        <div>
        <LoadingBar
        height = '3px'
        color='#f11946'
        progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
          <Navbar/>
          <Switch>
            <Route exact path='/'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="general1" pageSize={20} country="us" category=""/>
            </Route>
            <Route exact path='/business'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="business" pageSize={20} country="us" category="business"/>
            </Route>
            <Route exact path='/general'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="general" pageSize={20} country="us" category="general"/>
            </Route>
            <Route exact path='/entertainment'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="entertainment" pageSize={20} country="us" category="entertainment"/>
            </Route>
            <Route exact path='/health'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="health" pageSize={20} country="us" category="health"/>
            </Route>
            <Route exact path='/science'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="science" pageSize={20} country="us" category="science"/>
            </Route>
            <Route exact path='/sports'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="sports" pageSize={20} country="us" category="sports"/>
            </Route>
            <Route exact path='/technology'>
              <News setProgress={setProgress}  apiKey = {apiKey} key="technology" pageSize={20} country="us" category="technology"/>
            </Route>
            {/* <Route exact path='/usanews'>
              <UsaNews/>
            </Route> */}
          </Switch>
        </div>
      </Router>
      </>
    )
}

export default App

