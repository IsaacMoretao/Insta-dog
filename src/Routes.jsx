import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/index'

import { Loguin } from './pages/Loguin/Index'
import { Novopost } from './components/novoPost/Index.jsx'
import { NewCount } from './pages/newUser/Index'

import { Conta } from './pages/Cont/Index'
import ProectedRouter from './components/Helper/ProectedRouter'
import { UserHeader } from './components/UserHeader/Index'

import { LoginPassword } from './pages/LoginPassword/Index'
import UserCont from './pages/userCont/Index'
import MinhaConta from './pages/MinhaConta/Index'

function Rotas() {
  return (
    /*========== Rotas Para login ==========*/

    <Routes>
      <Route path="/Insta-dog/" element={<Home />} />
      <Route path="/Insta-dog/Login" element={<Loguin />} />
      <Route
        path="/Insta-dog/Login/restaurar_senha"
        element={<LoginPassword />}
      />
      <Route path="/Insta-dog/Login/novoUsuario" element={<NewCount />} />
      <Route path="/Insta-dog/Conta/perfil/:user" element={<UserCont />} />

      <Route
        path="/Insta-dog/Conta"
        element={
          <ProectedRouter>
            <UserHeader />
            <Conta />
          </ProectedRouter>
        }
      />

      <Route
        path="/Insta-dog/Conta/Gread"
        element={
          <ProectedRouter>
            <UserHeader />
            <Home />
          </ProectedRouter>
        }
      />

      <Route
        path="/Insta-dog/Conta/novoPost"
        element={
          <ProectedRouter>
            <UserHeader />
            <Novopost />
          </ProectedRouter>
        }
      />

      <Route
        path="/Insta-dog/Conta/MinhaConta"
        element={
          <ProectedRouter>
            <UserHeader />
            <MinhaConta />
          </ProectedRouter>
        }
      />
    </Routes>

    /*========== Rotas Para Usuario logado ==========*/
  )
}

export default Rotas
