import { Routes, Route} from 'react-router-dom';
import { UserHeader } from './../../components/UserHeader/Index';

import { Greads } from '../../components/Greads/Index';
import { Estatistics } from '../../components/Estatistics/Index';
import { newPost } from '../../components/newPost/Index';

export function Conta(){

  return(

    <>
      <UserHeader/>
      <Routes>
        <Route path="/istadog/Conta/Grade" element={<Greads/>} />
        <Route path="/istadog/Conta/Estatisticas" element={<Estatistics/>} />
        <Route path="/istadog/Conta/novoPost" element={<newPost/>} />
      </Routes>
    </>

  )

}