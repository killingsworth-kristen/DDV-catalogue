import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import './App.css'
// import API from './utils/API';

// import components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import Browse from './components/pages/Browse';
import Stats from './components/pages/Stats';
import Lists from './components/pages/Lists';



function App() {

  const [clothingCollection, setClothingCollection] = useState({clothingId: []});
  const [craftingCollection, setCraftingCollection] = useState({craftingId: []});
  const [furnitureCollection, setFurnitureCollection] = useState({furnitureId: []});

  localStorage.setItem("clothingCollection", JSON.stringify(clothingCollection));
  localStorage.setItem("craftingCollection", JSON.stringify(craftingCollection));
  localStorage.setItem("furnitureCollection", JSON.stringify(furnitureCollection));

  return (
    <div className="App">
        <Router>
          <Header/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard furnitureCollection={furnitureCollection} setFurnitureCollection={setFurnitureCollection}/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/stats" element={<Stats/>}/>
            <Route path="/lists" element={<Lists/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
