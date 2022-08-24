import React from 'react';
import { Loguins } from '../../components/Loguin/Index';
import { UserContext } from '../../useContext'
export function Loguin(){

  const { login } = React.useContext(UserContext)

  if (login === true) return (<Navigate to='/istadog/Conta' />)
  return(

    <main className="Loguin">
      <Loguins/>
    </main>
  )
}