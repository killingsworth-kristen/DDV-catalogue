import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// import components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import Browse from './components/pages/Browse';
import Stats from './components/pages/Stats';
import Lists from './components/pages/Lists';



function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/stats" element={<Stats/>}/>
            <Route path="/lists" element={<Lists/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
