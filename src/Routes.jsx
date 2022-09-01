import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";

import { Loguin } from './pages/Loguin/Index';
import { Novopost } from './components/novoPost/Index.jsx';
import { NewCount } from './pages/newUser/Index';

import { Conta } from './pages/Cont/Index'
//import { ProectedRouter } from './components/Helper/ProectedRouter';
import { UserHeader } from './components/UserHeader/Index';


function Rotas() {
  return (
    /*========== Rotas Para login ==========*/
        
      <Routes>

        <Route path="/istadog/" element={<Home />} />
        <Route path="/istadog/Loguin" element={<Loguin />} />
        <Route path="/istadog/Loguin/novoUsuario" element={<NewCount/>} />
        <Route path="/istadog/Conta" element={<><UserHeader/><Conta/></>} />

        <Route path="/istadog/Conta/Gread" element={<><UserHeader/><Home /></>} />
        <Route path="/istadog/Conta/Statics" element={<><UserHeader/><h1>Hello</h1></>} />
        <Route path="/istadog/Conta/novoPost" element={<><UserHeader/><Novopost/></>} />

      </Routes>

    /*========== Rotas Para Usuario logado ==========*/

  )

}

export default Rotas
