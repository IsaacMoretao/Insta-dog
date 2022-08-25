import React from 'react';
import { Loguins } from '../../components/Loguin/Index';
import { UserContext } from '../../useContext';
import { Header } from '../../components/Header';
import './Stylle.scss';

export function Loguin(){

  const { login } = React.useContext(UserContext)

  if (login === true) return (<Navigate to='/istadog/Conta' />)
  return(
    <>
      <Header/>
      <main className="Loguin">
        <figure></figure>
        <Loguins/>
      </main>
    </>
  )
}