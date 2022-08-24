import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Loguin } from './pages/Loguin/Index';

function Rotas() {

  return (
    
    <Routes>
      <Route path="/istadog/" element={<Home />} />
      <Route path="/istadog/Loguin" element={<Loguin />} />
      <Route path="/istadog/Conta" element={<h1>Hello</h1>} />
    </Routes>
    
  )
}

export default Rotas
