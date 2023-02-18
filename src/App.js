import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [activeAction, setActiveAction] = useState('home')

  return (
    <>
      <Navbar activeAction={activeAction} setActiveAction={setActiveAction}/>
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />

      </Routes>
      


    </>
  );
}

export default App;
