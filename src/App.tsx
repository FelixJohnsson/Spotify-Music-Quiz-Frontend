import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import LoggedIn from './components/LoggedIn/LoggedIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path="/logged_in/:tokens" element={ <LoggedIn /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
