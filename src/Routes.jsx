import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";

import { Loguin } from './pages/Loguin/Index';
//import { Password } from './pages/Password/Index';
import { NewCount } from './pages/newUser/Index'

import { Conta } from './pages/Cont/Index';
//import { ProectedRouter } from './components/Helper/ProectedRouter';

function Rotas() {
  return (
    /*========== Rotas Para login ==========*/
        
      <Routes>
        <Route path="/istadog/" element={<Home />} />
        <Route path="/istadog/Loguin" element={<Loguin />} />
        <Route path="/istadog/Loguin/novoUsuario" element={<NewCount/>} />
        <Route path="/istadog/Conta" element={<Conta/>} />

      </Routes>

    /*========== Rotas Para Usuario logado ==========*/

  )

}

export default Rotas
