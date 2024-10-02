//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componentes/login/login.jsx';
import Campania from './componentes/campania/campania.jsx';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
