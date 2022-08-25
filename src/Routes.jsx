import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Loguin } from './pages/Loguin/Index';
import { Password } from './pages/Password/Index';
import { NewCount } from './pages/newUser/Index'
import { NewCount } from './pages/Create Count/Index';

function Rotas() {
  return (
    
    <Routes>
      <Route path="/istadog/" element={<Home />} />
      <Route path="/istadog/Loguin" element={<Loguin />} />
      <Route path="/istadog/Conta" element={<h1>Hello</h1>} />
      <Route path="/istadog/Loguin/novoUsuário" element={<NewCount/>} />
    </Routes>
    
  )
}

export default Rotas
