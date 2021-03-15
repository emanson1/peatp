import React, { useState } from 'react'
import logo from './logo.svg';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import {Paper, Grid} from '@material-ui/core';
import TinderCard from 'react-tinder-card';
import TabPanel from '../src/Pages/Dashboard';
import DataLayer from '../src/Pages/DataLayer';
import Instruments from '../src/Pages/Instruments';
import {View} from 'react-native';


function App() {
  
  return (
  <div> 
    <Router>
    <Route exact path='/' component={Instruments}/>
    </Router>
  </div>
  
    )
}

export default App;
