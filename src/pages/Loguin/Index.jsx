import React from 'react';
import { Loguins } from '../../components/Loguin/Index';
import { UserContext } from '../../useContext';
import { useNavigate } from 'react-router-dom';
import './Stylle.scss';

export function Loguin() {
  const { login } = React.useContext(UserContext)
  const Navigate = useNavigate()

  if (login === true) return <Navigate to="/Insta-dog/Conta/MinhaConta" />
  return (
    <>
      <main className="Loguin">
        <figure className="figure" />
        <Loguins />
      </main>
    </>
  )
}
