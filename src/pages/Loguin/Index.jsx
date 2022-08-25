import React from 'react';
import { Loguins } from '../../components/Loguin/Index';
import { UserContext } from '../../useContext';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import './Stylle.scss';

export function Loguin(){

  const { login } = React.useContext(UserContext)

  if (login === true) return (<Navigate to='/istadog/Conta' />)
  return(
    <>
      <main className="Loguin">
        <figure className='figure'/>
        <Loguins/>
      </main>
    </>
  )
}