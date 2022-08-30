import { UserHeader } from './../../components/UserHeader/Index';
import { Routes, Route } from 'react-router-dom';
import { Greads } from '../../components/Greads/Index';

import { Estatistics } from '../../components/Estatistics/Index';
//import { newPost } from '../../components';

export function Conta(){

  return(

    <>

      <UserHeader/>
      <Routes>
        <Route path="/istadog/Gread" element={<Greads/>} />
        <Route path="/istadog/Statics" element={<Estatistics/>} />
        <Route path="/istadog/novoPost" element={<h1>yuguiygyu</h1>} />
      </Routes>

    </>

  )

}