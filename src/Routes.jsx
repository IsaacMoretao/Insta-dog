import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/index";

import { Loguin } from './pages/Loguin/Index';
import { Novopost } from './components/novoPost/Index.jsx';
import { NewCount } from './pages/newUser/Index';

import { Conta } from './pages/Cont/Index'
import ProectedRouter from './components/Helper/ProectedRouter';
import { UserHeader } from './components/UserHeader/Index';
import { LoginPassword } from './pages/LoginPassword/Index';




function Rotas() {


  return (
    /*========== Rotas Para login ==========*/
        
      <Routes>

        <Route path="/istadog/" element={<Home />} />
        <Route path="/istadog/Loguin" element={<Loguin />} />
        <Route path="/istadog/Loguin/restaurar_senha" element={<LoginPassword/>} />
        <Route path="/istadog/Loguin/novoUsuario" element={<NewCount/>} />
        <Route path="/istadog/Conta" element={<ProectedRouter><UserHeader/><Conta/></ProectedRouter>} />

        <Route path="/istadog/Conta/Gread" element={<ProectedRouter><UserHeader/><Home /></ProectedRouter>} />
        <Route path="/istadog/Conta/Statics" element={<ProectedRouter><UserHeader/><h1>Em Breve</h1></ProectedRouter>} />
        <Route path="/istadog/Conta/novoPost" element={<ProectedRouter><UserHeader/><Novopost/></ProectedRouter>} />

      </Routes>

    /*========== Rotas Para Usuario logado ==========*/

  )

}

export default Rotas
